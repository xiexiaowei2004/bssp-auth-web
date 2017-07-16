<%@ page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>加工出入区核注清单</title>
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
    <script src="../../../static/common/html5shiv/html5shiv.min.js"></script>
    <script src="../../../static/common/html5shiv/respond.min.js"></script>
    <![endif]-->
</head>
<body class="hold-transition skin-blue sidebar-mini content-container">
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
		    	<form id="form">
		         <table class="table table-condensed no-border">
		         	<input id="seqNo" name="seqNo" type="hidden" />
		            <tr>
		                <td class="table-label text-nowrap" style="width:160px">保税清单编号:</td>
		                <td><input class="input-sm form-control" id="bondInvtNo" name="bondInvtNo" readonly></td>
		                <td class="table-label text-nowrap" style="width:160px;">清单预录入编号:</td>
		                <td><input class="input-sm form-control" id="invtPreentNo" name="invtPreentNo" readonly></td>
		                <td class="table-label text-nowrap" style="width:160px;">企业内部清单编号:</td>
		                <td><input class="input-sm form-control" id="etpsInnerInvtNo" name="etpsInnerInvtNo" readonly></td>
		            </tr>		      

		            <tr>
		                <td class="table-label text-nowrap">备案编号*：</td>
		                <td>
			                <div class="form-group">
			                <select class="form-control" id="putrecNo" name="putrecNo" required>
			                  <option>1</option>
			                  <option>2</option>
			                  <option>3</option>
			                  <option>5</option>
			                </select>
			                </div>
		                </td>
		                <td class="table-label text-nowrap">清单类型</td>
		                <td><input class="input-sm form-control" id="bondInvtTypename" name="bondInvtTypename" placeholder="" readonly></td>
		                <td class="table-label text-nowrap">清单状态</td>
		                <td><input class="input-sm form-control" id="invtStuname" name="invtStuname"  readonly></td>
		            </tr>
		            <tr>
		                <td class="table-label text-nowrap">出入区标识</td>
		                <td><input class="input-sm form-control" id="iEFlag" name="iEFlag" placeholder="" readonly></td>
		                <td class="table-label text-nowrap">出入区方式*</td>
		                <td>
			                <div class="form-group">
			                <select class="form-control" id="iEWay" name="iEWay" required>
			                	<option>1</option>
			                	<option>2</option>
			                	<option>3</option>
			                	<option>6</option>
			                </select>
			                </div>
		                </td>
		                <td class="table-label text-nowrap">主管关区代码</td>
		                <td><input class="input-sm form-control" id="masterCuscd" name="masterCuscd" placeholder="" readonly></td>
		                </tr>
		            <tr>
		                <td class="table-label text-nowrap">经营企业社会信用代码</td>
		                <td colspan="3"><input class="input-sm form-control" id="bizopEtpsSccd" name="bizopEtpsSccd" placeholder="" readonly></td>
		                <td class="table-label text-nowrap">经营企业编号</td>
		                <td><input class="input-sm form-control" id="bizopEtpsno" name="bizopEtpsno" placeholder="" readonly></td>
		              </tr>
		            <tr>
		                <td class="table-label text-nowrap">经营企业名称</td>
		                <td colspan="3"><input class="input-sm form-control" id="bizopEtpsNm" name="bizopEtpsNm" placeholder="" readonly></td>
		                <td class="table-label text-nowrap">收发货企业社会信用代码*</td>
		                <td><input class="input-sm form-control" placeholder="请输入申报企业社会信用代码" id="rvsngdEtpsSccd" name="rvsngdEtpsSccd"></td>
		           </tr>
		            <tr>
		                <td class="table-label text-nowrap">收货企业编号*</td>
		                <td><div class="form-group"><input class="input-sm form-control" placeholder="请输入收货企业编号*" id="rcvgdEtpsno" name="rcvgdEtpsno"></div></td>
		                <td class="table-label text-nowrap">收货企业名称*</td>
		                <td colspan="3"><div class="form-group"><input class="input-sm form-control" placeholder="请输入收货企业名称" id="rcvgdEtpsNm" name="rcvgdEtpsNm" ></div></td>		               
		            </tr>
		            <tr>
		            	 <td class="table-label text-nowrap">申报企业社会信用代码</td>
		                <td colspan="3"><input class="input-sm form-control" placeholder="" id="dclEtpsSccd" name="dclEtpsSccd" readonly></td>
		                <td class="table-label text-nowrap">申报企业编号</td>
		                <td><input class="input-sm form-control" placeholder="" id="dclEtpsno" name="dclEtpsno" readonly></td>                
		            </tr>
		            <tr>
		            	<td class="table-label text-nowrap">申报企业名称</td>
		                <td colspan="3"><input class="input-sm form-control" placeholder="" id="dclEtpsNm" name="dclEtpsNm" readonly></td>
		                <td class="table-label text-nowrap">清单申报日期</td>
		                <td><input type="text" class="form-control input-sm datepicker" placeholder="" value="2017-05-19"  id="invtDclTime" name="invtDclTime" readonly></td>		                            
		            </tr>
		            <tr>
		            	<td class="table-label text-nowrap">进出口口岸*</td>
		                <td>
			                <div class="form-group">
			                <select class="form-control" id="impexpPortcd" name="impexpPortcd" required>
			                	<option>1</option>
			                	<option>2</option>
			                	<option>3</option>
			                	<option>5</option>
			                	<option>6</option>
			                </select>
			                </div>
		                </td>  
		                <td class="table-label text-nowrap">申报地关区代码*</td>
		                <td>
			                <div class="form-group">
			                <select class="form-control" id="dclPlcCuscd" name="dclPlcCuscd" required>
			                	<option>1</option>
			                	<option>2</option>
			                	<option>3</option>
			                	<option>5</option>
			                </select>
			                </div>
		                </td>  		               
		                <td class="table-label text-nowrap">进出口标记*</td>
		                <td>
		                <div class="form-group">
		                <select class="form-control" id="impexpMarkcd" name="impexpMarkcd" required>
		                 <option>1</option>
		                 <option>2</option>
		                 <option>3</option>
		                 <option>5</option>
		                </select>
		                </div>
		                </td>  		               		                		              
		            </tr>
		            <tr>
		            	<td class="table-label text-nowrap">料件成品标记*</td>
		                <td>
		                <div class="form-group">
		                <select class="form-control" id="mtpckEndprdMarkcd" name="mtpckEndprdMarkcd" required>
		                	<option value="I">I</option>
		                	<option value="E">E</option>
		                </select>
		                </div>
		                </td>  
		                <td class="table-label text-nowrap">监管方式*</td>
		                <td>
		                <div class="form-group">
		                <select class="form-control" id="supvModecd" name="supvModecd" required>
		                	<option>1</option>
		                	<option>2</option>
		                	<option>3</option>
		                </select>
		                </div>
		                </td>  		               
		                <td class="table-label text-nowrap">运输方式*</td>
		                <td>
		                <div class="form-group">
		                <select class="form-control" id="trspModecd" name="trspModecd" required>
		                	<option>1</option>
		                	<option>2</option>
		                	<option>3</option>
		                	<option>7</option>
		                </select>
		                </div>
		                </td>  		               		                		              
		            </tr>
		            <tr>
		            	<td class="table-label text-nowrap">是否报关标志</td>
		                <td><input type="text" class="form-control input-sm"   id="dclcusFlag" name="dclcusFlag" readonly></td>  
		                <td class="table-label text-nowrap">报关类型</td>
		                <td>
		                <select class="form-control" id="dclcusTypecd" name="dclcusTypecd" >
		                	<option>1</option>
		                	<option>2</option>
		                	<option>3</option>
		                	<option>5</option>
		                	<option>6</option>
		                </select>
		                </td>  		               
		                <td class="table-label text-nowrap">归并方式*</td>
		                <td>
		                <div class="form-group">
		                <select class="form-control" id="orgFlag" name="orgFlag" required>
		                	<option>1</option>
		                	<option>2</option>
		                	<option>3</option>
		                	<option>5</option>
		                </select>
		                </div>
		                </td>  		               		                		              
		            </tr>
		            <tr>
		                <td class="table-label text-nowrap">备注：</td>
		                <td colspan="5"><input class="input-sm form-control" id="rmk" name="rmk" placeholder="请输入备注信息"></td>
		            </tr>
		            
		            <tr>
		            	<td class="table-label text-nowrap">企业备案号</td>
		                <td><input class="input-sm form-control" id="inputCopNo" name="inputCopNo" value="2" readonly></td>
		            	<td class="table-label text-nowrap">监管场所</td>
		                <td><input class="input-sm form-control" id="areaCode" name="areaCode" readonly></td>
		                <td class="table-label text-nowrap datepicker">录入日期：</td>
		                <td><input class="input-sm form-control " id="decTime" name="decTime" value="2017-05-19" readonly></td>
		            </tr> 
		            <tr>
		                <td class="table-label text-nowrap">录入单位代码：</td>
		                <td><input class="input-sm form-control" id="inputCopNo" value="admin" name="inputCopNo" readonly></td>
		                <td class="table-label text-nowrap">录入单位名称:</td>
		                <td><input class="input-sm form-control" id="inputCopName" value="admin" name="inputCopName"  readonly></td>
		                <td class="table-label text-nowrap">操作员：</td>
		                <td><input class="input-sm form-control" value="admin" id="updateBy" name="updateBy"  readonly></td>		                
	              	</tr>		            
		        </table>
		    </form>
	    </div>
		   <div  class="box-body tab-content" style="height:500px;">
	       	<div class="box-header with-border collapsed-box" style="padding-bottom:50px;">
	          <div class="box-tools pull-right box-top-line">
		          <button type="button" class="btn btn-box-tool" data-widget="collapse" id="detailHide"  title="收起"><i class="fa fa-minus"></i></button>
		          <button type="button" class="btn btn-box-tool" data-widget="collapse" id="detailShow" title="展开" style="display:none;"><i class="fa fa-plus-circle"></i></button>
	          </div>
	        </div>
	        <ul id="tab" class="nav nav-tabs box-top-line">
	            <li class="active"><a href="#imgTab" data-toggle="tab">清单商品</a></li>
	            <li ><a href="#exgTab" data-toggle="tab">报关商品</a></li>
	        </ul>
	      	<!-- 清单商品 -->
	        <div  class="tab-pane fade in active div-pad" id="imgTab">
	            <div id="imgToolbar" class="btn-group m-t-sm">
	                <button id="add" type="button" class="btn btn-default"  title="新增">
	                    <i id="mtpckEndprdMarkcd-flag" class="glyphicon glyphicon-plus">新增</i>
	                </button>
	                <button id="delete" type="button" class="btn btn-default" title="删除">
	                    <i class="glyphicon glyphicon-trash">删除</i>
	                </button>
	                <button type="button" class="btn btn-default" title="生成报关商品">
	                    <i id="invexg-flag" class="glyphicon glyphicon-plus">生成报关商品</i>
	                </button>
	            </div>
	            <table id="imgTable"></table>
	        </div>
	        <!-- 报关商品 -->
	        <div  class="tab-pane fade div-pad" id="exgTab">
	            <div id="exgToolbar" class="btn-group m-t-sm">
	            </div>
	            <table id="exgTable"></table>
	        </div>
	        
	   	 </div>
	   	 <div class="box-body box-top-line div-margin">
   		<!-- 附件 -->
   		<div class="box-header with-border collapsed-box div-pad">
          <h4 class="box-title">附件信息列表</h4>
        </div>
        <div  class="box-body div-pad" id="file"  style="height:300px;">
            <div id="fileToolbar" class="btn-group m-t-sm">
                <button id="add" type="button" class="btn btn-default"  title="新增">
                    <i class="glyphicon glyphicon-plus"  onclick="showPage('file','附件信息-新增','emsPutrecFile/edit.jsp')">新增</i>
                </button>
                <button id="delete" type="button" class="btn btn-default" title="删除">
                    <i class="glyphicon glyphicon-trash" id="fileDelete">删除</i>
                </button>
            </div>
            <table id="fileTable"></table>
        </div>
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
    <script src="../../../static/bond/js/jquery.serializejson.js"></script>
    <script src="../../../static/bond/js/bondinvtbsc_form.js"></script>
</footer>
</body>
</html>