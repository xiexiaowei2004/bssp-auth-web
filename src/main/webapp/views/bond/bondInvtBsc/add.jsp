<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>加工账册备案</title>
    <link rel="stylesheet" href="../../../static/common/bootstrap-table-master/bootstrap-table.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap-datepicker-master/css/bootstrap-datepicker3.min.css" />
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../../../static/common/select2/css/select2.min.css" type="text/css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css" />
    <link rel="stylesheet" href="../../../static/common/css/style.css" />
    <link rel="stylesheet" href="../../../static/common/css/common.css" />

    <!-- HTML5 Shim 和 Respond.js 用于使IE8支持html5和css3媒介查询 -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body class="hold-transition skin-blue sidebar-mini">
<header>
    <div class="box box-solid div-pad box-line">
        <div class="btn-group div-left-pad">
            <i class="btn btn-default fa fa-save" id="save">保存</i>
            <i class="btn btn-default fa fa-save" id="submit">提交</i>
            <i class="btn btn-default fa fa-save" id="reback">返回</i>
        </div>
        <div class="pull-right">
          <button type="button" class="btn btn-box-tool" data-widget="collapse" id="headHide"  title="收起表头"><i class="fa fa-minus"></i></button>
          <button type="button" class="btn btn-box-tool" data-widget="collapse" id="headShow" title="展开表头" style="display:none;"><i class="fa fa-plus-circle"></i></button>                          
        </div> 
    </div>
        <div class="box box-primary no-margin">                        
      		<div class="box-body no-margin" id="head"> 
		    	<form id="dataForm">
		        <table class="table table-condensed no-border">
		            <tr>
		                <td class="table-label text-nowrap" style="width:160px;font-weight:700;">保税清单编号:</td>
		                <td><input class="input-sm form-control" readonly></td>
		                <td class="table-label text-nowrap" style="width:160px;font-weight:700;">清单预录入编号:</td>
		                <td><input class="input-sm form-control" readonly></td>
		                <td class="table-label text-nowrap" style="width:160px;font-weight:700;">企业内部清单编号:</td>
		                <td><input class="input-sm form-control"  readonly></td>
		            </tr>		      

		            <tr>
		                <td class="table-label text-nowrap">备案编号*：</td>
		                <td><select class="form-control" id="putrecNo" name="putrecNo" required></select></td>
		                <td class="table-label text-nowrap">清单类型</td>
		                <td><input class="input-sm form-control" id="bondInvtTypename" name="bondInvtTypename" placeholder="请输入清单类型" readonly></td>
		                <td class="table-label text-nowrap">清单状态</td>
		                <td><input class="input-sm form-control" id="invtStuname" name="invtStuname" placeholder="请输入清单状态" readonly></td>
		            </tr>
		            <tr>
		                <td class="table-label text-nowrap">出入区标识</td>
		                <td><input class="input-sm form-control" id="IEFlag" name="IEFlag" placeholder="请输入出入区标识" readonly></td>
		                <td class="table-label text-nowrap">出入区方式*</td>
		                <td><select class="form-control" id="IEWay" name="IEWay" required></select></td>
		                <td class="table-label text-nowrap">主管海关代码</td>
		                <td><input class="input-sm form-control" id="masterCuscd" name="masterCuscd" placeholder="请输入主管海关代码" readonly></td>
		                </tr>
		            <tr>
		                <td class="table-label text-nowrap">经营企业社会信用代码</td>
		                <td colspan="3"><input class="input-sm form-control" id="bizopEtpsSccd" name="bizopEtpsSccd" placeholder="请输入经营企业社会信用代码" readonly></td>
		                <td class="table-label text-nowrap">经营企业编号</td>
		                <td><input class="input-sm form-control" id="bizopEtpsno" name="bizopEtpsno" placeholder="请输入经营企业编号" readonly></td>
		              </tr>
		            <tr>
		                <td class="table-label text-nowrap">经营企业名称</td>
		                <td colspan="3"><input class="input-sm form-control" id="bizopEtpsNm" name="bizopEtpsNm" placeholder="请输入经营企业名称" readonly></td>
		                <td class="table-label text-nowrap">收发货企业社会信用代码*</td>
		                <td><input class="input-sm form-control" placeholder="请输入申报企业社会信用代码" id="rvsngdEtpsSccd" name="rvsngdEtpsSccd"></td>
		           </tr>
		            <tr>
		                <td class="table-label text-nowrap">收货企业编号*</td>
		                <td><input class="input-sm form-control" placeholder="请输入收货企业编号*" id="rcvgdEtpsno" name="rcvgdEtpsno"></td>
		                <td class="table-label text-nowrap">收货企业名称*</td>
		                <td colspan="3"><input class="input-sm form-control" placeholder="请输入收货企业名称" id="rcvgdEtpsNm" name="rcvgdEtpsNm" ></td>		               
		            </tr>
		            <tr>
		            	 <td class="table-label text-nowrap">申报企业社会信用代码</td>
		                <td colspan="3"><input class="input-sm form-control" placeholder="请输入申报企业社会信用代码" id="dclEtpsSccd" name="dclEtpsSccd" readonly></td>
		                <td class="table-label text-nowrap">申报企业编号</td>
		                <td><input class="input-sm form-control" placeholder="请输入申报企业编号" id="dclEtpsno" name="dclEtpsno" readonly></td>
<!-- 		                <td class="table-label text-nowrap">结束有效日期:</td>
		                <td><input type="text" class="form-control input-sm datepicker" placeholder="请输入结束有效日期"  id="CHG_TMS_CNT" name="chgTmsCnt"></td>	 -->	                
		            </tr>
		            <tr>
		            	<td class="table-label text-nowrap">申报企业名称</td>
		                <td colspan="3"><input class="input-sm form-control" placeholder="请输入申报企业名称" id="dclEtpsNm" name="dclEtpsNm" readonly></td>
		                <td class="table-label text-nowrap">清单申报日期</td>
		                <td><input type="text" class="form-control input-sm datepicker" placeholder="请输入结束有效日期"  id="invtDclTime" name="invtDclTime" readonly></td>		                            
		            </tr>
		            <tr>
		            	<td class="table-label text-nowrap">进出口口岸*</td>
		                <td><select class="form-control" id="impexpPortcd" name="impexpPortcd" required></select></td>  
		                <td class="table-label text-nowrap">申报地关区代码*</td>
		                <td><select class="form-control" id="dclPlcCuscd" name="dclPlcCuscd" required></select></td>  		               
		                <td class="table-label text-nowrap">进出口标记*</td>
		                <td><select class="form-control" id="impexpMarkcd" name="impexpMarkcd" required></select></td>  		               		                		              
		            </tr>
		            <tr>
		            	<td class="table-label text-nowrap">料件成品标记*</td>
		                <td><select class="form-control" id="mtpckEndprdMarkcd" name="mtpckEndprdMarkcd" required></select></td>  
		                <td class="table-label text-nowrap">监管方式*</td>
		                <td><select class="form-control" id="supvModecd" name="supvModecd" required></select></td>  		               
		                <td class="table-label text-nowrap">运输方式*</td>
		                <td><select class="form-control" id="trspModecd" name="trspModecd" required></select></td>  		               		                		              
		            </tr>
		            <tr>
		            	<td class="table-label text-nowrap">是否报关标志</td>
		                <td><input type="text" class="form-control input-sm"   id="dclcusFlag" name="dclcusFlag" readonly></td>  
		                <td class="table-label text-nowrap">报关类型</td>
		                <td><select class="form-control" id="dclcusTypecd" name="dclcusTypecd" ></select></td>  		               
		                <td class="table-label text-nowrap">归并方式*</td>
		                <td><select class="form-control" id="orgFlag" name="orgFlag" required></select></td>  		               		                		              
		            </tr>
		            <tr>
		                <td class="table-label text-nowrap">备注：</td>
		                <td colspan="5"><input class="input-sm form-control" id="orgFlag" name="orgFlag" placeholder="请输入备注信息"></td>
		            </tr>
		            
		            <tr>
		            	<td class="table-label text-nowrap">企业备案号</td>
		                <td><input class="input-sm form-control" id="inputCopNo" name="inputCopNo" readonly></td>
		            	<td class="table-label text-nowrap">监管场所</td>
		                <td><input class="input-sm form-control" id="areaCode" name="areaCode" readonly></td>
		                <td class="table-label text-nowrap datepicker">录入日期：</td>
		                <td><input class="input-sm form-control " id="decTime" name="decTime" readonly></td>
		            </tr>
		            <tr>
		                <td class="table-label text-nowrap">录入单位代码：</td>
		                <td><input class="input-sm form-control" id="inputCopNo" name="inputCopNo" readonly></td>
		                <td class="table-label text-nowrap">录入单位名称:</td>
		                <td><input class="input-sm form-control" id="inputCopName" name="inputCopName"  readonly></td>
		                <td class="table-label text-nowrap">操作员：</td>
		                <td><input class="input-sm form-control" id="updateBy" name="updateBy"  readonly></td>		                
	              	</tr>		            
		        </table>
		    </form>
	    </div>
    	</div>
        <div  class="box-body tab-content">
	        <ul id="tab" class="nav nav-tabs box-top-line">
	            <li class="active"><a href="#bscTab" data-toggle="tab">清单商品</a></li>
	            <li><a href="#exgTab" data-toggle="tab">报关商品</a></li>
	            <li><a href="#fileTab" data-toggle="tab">附件</a></li>
	        </ul>
	      	<!-- 料件 -->
	        <div  class="tab-pane fade in active div-pad" id="bscTab">
	            <div id="imgToolbar" class="btn-group m-t-sm">
	                <button id="add" type="button" class="btn btn-default"  title="新增">
	                    <i class="glyphicon glyphicon-plus">新增</i>
	                </button>
	                <button id="delete" type="button" class="btn btn-default" title="删除">
	                    <i class="glyphicon glyphicon-trash">删除</i>
	                </button>
	            </div>
	            <table id="bscTable"></table>
	        </div>
	        <!-- 成品 -->
	        <div  class="tab-pane fade div-pad" id="exgTab">
	            <div id="exgToolbar" class="btn-group m-t-sm">
	                <button id="add" type="button" class="btn btn-default"  title="新增">
	                    <i class="glyphicon glyphicon-plus">新增</i>
	                </button>
	                <button id="delete" type="button" class="btn btn-default" title="删除">
	                    <i class="glyphicon glyphicon-trash">删除</i>
	                </button>
	            </div>
	            <table id="exgTable"></table>
	        </div>
	        <!-- 附件 -->
	        <div  class="tab-pane fade div-pad" id="fileTab">
	            <div id="fileToolbar" class="btn-group m-t-sm">
	                <button id="add" type="button" class="btn btn-default"  title="新增">
	                    <i class="glyphicon glyphicon-plus">新增</i>
	                </button>
	                <button id="delete" type="button" class="btn btn-default" title="删除">
	                    <i class="glyphicon glyphicon-trash">删除</i>
	                </button>
	            </div>
	            <table id="fileTable"></table>
	        </div>
    	</div>
</header>
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
    <!-- Data picker -->
    <script src="../../../static/common/bootstrap-datepicker-master/js/bootstrap-datepicker.js"></script>
    <!-- 自定义js -->
    <script src="../../../static/admin/main/js/contabs.js"></script>
    <script src="../../../static/common/js/common.js"></script>
    <script src="../../../static/bond/js/bondinvtbsc_form.js"></script>
</footer>
</body>
</html>