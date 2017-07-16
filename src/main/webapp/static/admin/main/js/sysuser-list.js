//列配置
var columns=[
	{ title: "全选",field: "select",checkbox: true,width: 20,align: "center",valign: "middle"},
	{ title: "账号ID",field: "loginName",halign:"center",align: "center",sortable: true },
	{ title: "账号名称",field: "userName",halign:"center",align: "center",sortable: true },
	{ title: "真实姓名",field: "realName",halign:"center",align: "center",sortable: true },
	{ title: "手机",field: "telephone",halign:"center",align: "center",sortable: true },
	{ title: "邮箱",field: "email",halign:"center",align: "center",sortable: true },
	{ title: "用户类型",field: "userType",halign:"center",align: "center",sortable: true ,formatter:function(value,row,index) {
        var s;
        if (row.userType == 1) {
            s = '<span class="label label-primary">企业用户</span>';
        } else {
            s = '<span class="label label-primary">平台用户</span>';
        }
        return s;
     }},
	{ title: "企业编号",field: "tradeCode",halign:"center",align: "center",sortable: true},
	{ title: "企业名称",field: "entName",halign:"center",align: "left",sortable: true },
	{ title: "注册时间",field: "createTime",halign:"center",align: "center",sortable: true },
	{ title: "最后登录时间",field: "lastLoginTime",halign:"center",align: "center",sortable: true },
	{ title: "登录IP",field: "lastLoginIp",halign:"center",align: "center",sortable: true },
	{ title: "状态",field: "status",halign:"center",align: "center",sortable: true,formatter:function(value,row,index){
	    	var s;
	    	if(row.status==1){
	    		s='<span class="label label-primary">正常</span>';
	    	}else{
	    		s='<span class="label label-primary">冻结</span>';
	    	}
	    	return s;
	    	
	 }},
    { title: '操作',field: 'id',align: 'center',formatter:function(value,row,index){  
        var f;
        if(row.status==1){
       	 f = '<a class="like text-info" href="javascript:void(0)" onClick="member_stop(this,\''+ row.id +'\')" title="冻结"><i class="glyphicon glyphicon-pause"></i></a>';
        }else{
       	 f = '<a class="like text-info" href="javascript:void(0)" onClick="member_start(this,\''+ row.id +'\')" title="启用"><i class="glyphicon glyphicon-play"></i></a>';
        }
        var e = '<a href="#" mce_href="#" onclick="user_edit(\''+row.id+'\')" title="编辑"><i class="glyphicon glyphicon-edit"></i></a> ';
        var d = '<a href="#" mce_href="#" onclick="member_del(this,\'' + row.id + '\')" title="删除"><i class="glyphicon glyphicon-remove"></i></a> ';
        //var l = '<a href="#" mce_href="#" onclick="look(\''+ row.id +'\')" title="查阅"><i class="glyphicon glyphicon-search"></i></a> ';
             return f+e+d;  
         } 
       }
	];
var paramData ;
var param = {};
param.columns=columns;
param.search=true;
param.gridId="dataGrid";
// 日期插件
$(document).ready(function () {
	$('#data_5 .input-daterange').datepicker({
		keyboardNavigation: false,
		forceParse: false,
		autoclose: true,
		format: 'yyyy/mm/dd',  
	});
	
	var url = _server+"/system/sysuser/list";
	 $.ajax({
		 	 url:url,
	         type: 'get',
	         dataType:'json',
	         xhrFields: {
	             withCredentials: true
	         },
	         crossDomain: true,
	         success: function (data) {
	         initFormData(data,columns);
	         },
	         error: function (data) {
	        	 alert("数据加载异常");
	         }
	     });
	//新增事件
		$("#add").click(function(){
			location.href=baselocation+"/views/admin/system/system_user_add.jsp";
		});
		//删除事件
		/*$("#delete").click(function(){
			var url=_server+'parameter/codcuswrap/list/delete';
			dataGridUtils.deleteGrid("dataGrid",url,"wraptype");
		});*/
})

//初始化表单数据
function initFormData(data,columns){
	//创建bootsrap table
	param.data=data.data.systemUsers;
	console.log(data);
	param.dataField="systemUsers";
	DataGridUtils.initGrid(param);
}


/*用户-删除*/
function member_del(obj,id){
	layer.confirm('确认要删除吗？',{btn: ['确定','取消'] //按钮
	}, function(){
		$.ajax({
			type:'post',
			dataType:'json',
			url:_server+'/system/sysuser/list/'+id+'/delete',
		    xhrFields: {
	            withCredentials: true
	        },
	        crossDomain: true,
			success:function(result){
				if (result.code==1){
				 layer.msg(result.message,{icon:1,time:1000});
				    console.log(result);
		            	/*param.url=_server+"/system/sysuser/list";
		                DataGridUtils.refresh(param);*/
		            	location.href=baselocation+"/views/admin/system/system_user_list.jsp";
                    layer.alert(result.message, {icon: 1});
		            }else{
						layer.alert(result.message, {icon: 2});
					}
            },
            error: function () {
                //location.href=baselocation+"/views/admin/system/system_user_list.jsp";
                alert("删除功能报错！");
			}
        });
	});
}
/*用户-冻结*/
function member_stop(obj,id){
	layer.confirm('确认要冻结吗？',{btn: ['确定','取消'] //按钮
	}, function(){
		$.ajax({
			data:{'accountId':id,'status':0},
			dataType:'json',
			type:'post',
			url:_server+'/system/sysuser/list/audit',
		    xhrFields: {
	            withCredentials: true
	        },
	        crossDomain: true,
			success:function(result){
				if(result.code==1){
					$(obj).parents("tr").find(".td-manage").prepend('<a class="like text-info" href="javascript:void(0)" onClick="member_start(this,'+id+')" title="启用"><i class="glyphicon glyphicon-play"></i></a>');
					$(obj).parents("tr").find(".td-status").html('<span class="label label-danger">冻结</span>');
					$(obj).remove();
					layer.msg('已冻结!',{icon: 5,time:1000});
					/*param.url=_server+"/system/sysuser/list";
	                DataGridUtils.refresh(param);*/
					location.href=baselocation+"/views/admin/system/system_user_list.jsp";
				}else{
					layer.alert(result.message, {icon: 2});
				}
			}
		})
	});
}
        
/*用户-启用*/
function member_start(obj,id){
	layer.confirm('确认要启用吗？',{btn: ['确定','取消'] //按钮
	}, function(){
		$.ajax({
			data:{'accountId':id,'status':1},
			dataType:'json',
			type:'post',
			url:_server+'/system/sysuser/list/audit',
		    xhrFields: {
	            withCredentials: true
	        },
	        crossDomain: true,
			success:function(result){
				if(result.code==1){
					$(obj).parents("tr").find(".td-manage").prepend('<a class="like text-info" href="javascript:void(0)" onClick="member_stop(this,'+id+')" title="冻结"><i class="glyphicon glyphicon-pause"></i></a>');
					$(obj).parents("tr").find(".td-status").html('<span class="label label-primary">正常</span>');
					$(obj).remove();
					layer.msg('已启用!',{icon: 6,time:1000});
					/*param.url=_server+"/system/sysuser/list";
	                DataGridUtils.refresh(param);*/
					location.href=baselocation+"/views/admin/system/system_user_list.jsp";
				}else{
					layer.alert(result.message, {icon: 2});
				}
			}
		})
	});
}

/*用户-编辑*/
function user_edit(id){
	location.href=baselocation+"/views/admin/system/system_user_add.jsp?id="+id;
}
    

/*用户-查看*/
function member_show(title,url,id,ope,w,h){
	if(id == null){
		layer_show(title,url,w,h);
	}else{
		layer_show(title,url+'/'+id+'/'+ope,w,h);
	}
}
    
/*弹出层*/
/*
	参数解释：
	title	标题
	url		请求的url
	id		需要操作的数据id
	w		弹出层宽度（缺省调默认值）
	h		弹出层高度（缺省调默认值）
*/
function layer_show(title,url,w,h){
	if (title == null || title == '') {
		title=false;
	};
	if (w == null || w == '') {
		w=800;
	};
	if (h == null || h == '') {
		h=($(window).height() - 50);
	};
	layer.open({
		type: 2,
		area: [w+'px', h +'px'],
		fix: false, //不固定
		maxmin: true,
		scrollbar: false,//屏蔽游览器滚动条
		shade:0.4,
		title: title,
		content: url
	});
}
/*关闭弹出框口*/
function layer_close(){
	var index = parent.layer.getFrameIndex(window.name);
	parent.layer.close(index);
}

//拖动面板
$(document).ready(function () {
    $(".sortable-list").sortable({
        connectWith: ".connectList"
    }).disableSelection();

});

