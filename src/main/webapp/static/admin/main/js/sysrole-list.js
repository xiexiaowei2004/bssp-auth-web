//列配置
var columns=[
    { title: "全选",field: "select",checkbox: true,width: 20,align: "center",valign: "middle"},
    { title: "角色名称",field: "roleName",halign:"center",align: "center",sortable: true },
    { title: "角色类型",field: "roleType",halign:"center",align: "center",sortable: true ,formatter:function(value,row,index) {
        var s;
        if (row.roleType == 1) {
            s = '<span class="label label-primary">企业角色</span>';
        } else {
            s = '<span class="label label-primary">平台角色</span>';
        }
        return s;
    }},
    { title: "创建者",field: "createBy",halign:"center",align: "center",sortable: true },
    { title: "创建时间",field: "createTime",halign:"center",align: "center",sortable: true },
    { title: "系统数据",field: "isSystem",halign:"center",align: "center",sortable: true,formatter:function(value,row,index){
    	var s;
    	if(row.isSystem==1){
    		s='<span class="label label-primary">是</span>';
    	}else{
    		s='<span class="label label-primary">否</span>';
    	}
    	return s;
    	
    }},
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
    	 f = '<a class="like text-info" href="javascript:void(0)" onClick="role_stop(this,\''+ row.id +'\')" title="冻结"><i class="glyphicon glyphicon-pause"></i></a>';
     }else{
    	 f = '<a class="like text-info" href="javascript:void(0)" onClick="role_start(this,\''+ row.id +'\')" title="启用"><i class="glyphicon glyphicon-play"></i></a>';
     }
     var e = '<a href="#" mce_href="#" onclick="role_edit(\''+row.id+'\')" title="编辑"><i class="glyphicon glyphicon-edit"></i></a> ';  
     var d = '<a href="#" mce_href="#" onclick="role_del(this,\''+ row.id +'\')" title="删除"><i class="glyphicon glyphicon-remove"></i></a> ';  
     //var l = '<a href="#" mce_href="#" onclick="look(\''+ row.id +'\')" title="查阅"><i class="glyphicon glyphicon-search"></i></a> ';
          return f+e+d;  
      } 
    }
];
 var param = {};
 param.columns=columns;
 param.search=true;
 param.gridId="dataGrid";
 $(document).ready(function () {
		 $.ajax({
			     url:_server+"/system/sysrole/list",
		         dataType:'json',
		         xhrFields: {
		             withCredentials: true
		         },
		         crossDomain: true,
		         success: function (data) {
		           //console.log(data);
		           initFormData(data,columns);
		           //paramData = data.data;
		         },
		         error: function (data) {
		        	 alert("初始化表单数据失败");
		         }
		     });
		//新增事件
			$("#add").click(function(){
				location.href=baselocation+"/views/admin/system/system_role_add.jsp";
			});
			//删除事件
			/*$("#delete").click(function(){
				var url=_server+'/parameter/codcuswrap/list/delete';
				dataGridUtils.deleteGrid("dataGrid",url,"wraptype");
			});*/
	})
	
/*初始化表单数据*/
function initFormData(data,columns){
	//console.log(data);
/*	var sysRoleArr = data.data.systemRoles;
	var sysRoleStr = "";
	for(var i=0;i<sysRoleArr.length;i++){
		sysRoleStr+= "<li class='info-element'> " +sysRoleArr[i].roleName+
				     "<span class='badge badge-primary>"+sysRoleArr[i].number+"</span>' " +
					     '<div class="agile-detail">'+
					     ;
	}*/
	var _serverUser =_server +"/system/sysuser/list" ;
	var sysRoleArr = data.data.systemRoles;
	var sysRoleStr = "";
	for(var i=0;i<sysRoleArr.length;i++){
		sysRoleStr+= Utils.stringFormat('<li class="info-element">{0}<span class="badge badge-primary">{1}</span>',sysRoleArr[i].roleName,sysRoleArr[i].number);
		sysRoleStr+= Utils.stringFormat('<div class="agile-detail">');
		sysRoleStr+=Utils.stringFormat('<a onclick="role_show(\'{0}\',\'{1}\',\'{2}\',\'role\',\'1000\',null)" class="pull-right btn btn-xs btn-primary">查看</a>',sysRoleArr[i].roleName,_serverUser,sysRoleArr[i].id);
		sysRoleStr+=Utils.stringFormat('<i class="fa fa-clock-o"></i>{0}</div></li>',sysRoleArr[i].updateTime);			     
	}
	//console.log(sysRoleStr);
	$("#sys-role").append(sysRoleStr);
	param.data=data.data.roleList;
	param.dataField="roleList";
	//创建bootsrap table
	DataGridUtils.initGrid(param);
}
 
/*角色-删除*/
function role_del(obj,id){
	layer.confirm('确认要删除吗？',{btn: ['确定','取消'] //按钮
	}, function(){
		$.ajax({
			type:'post',
			dataType:'json',
			url:_server+'/system/sysrole/list/'+id+'/delete',
		    xhrFields: {
		             withCredentials: true
		         },
		    crossDomain: true,
			success:function(result){
				//code=24表示角色删除成功
				if(result.code==24){
					//$(obj).parents("tr").remove();
					layer.msg('已删除!',{icon:1,time:1000});
					location.href=baselocation+"/views/admin/system/system_role_list.jsp";
				}else{
					layer.alert(result.message, {icon: 2});
				}
			}
		})
	});
}
/*角色-冻结*/
function role_stop(obj,id){
	layer.confirm('确认要冻结吗？',{btn: ['确定','取消'] //按钮
	}, function(){
		$.ajax({
			data:{'roleId':id,'status':0},
			dataType:'json',
			type:'post',
			url:_server+'/system/sysrole/list/audit',
			 xhrFields: {
	             withCredentials: true
	         },
	        crossDomain: true,
			success:function(result){
				if(result.code==1){
					$(obj).parents("tr").find(".td-manage").prepend('<a class="like text-info" href="javascript:void(0)" onClick="role_start(this,'+id+')" title="启用"><i class="glyphicon glyphicon-play"></i></a>');
					$(obj).parents("tr").find(".td-status").html('<span class="label label-danger">冻结</span>');
					$(obj).remove();
					layer.msg('已冻结!',{icon: 5,time:1000});
					location.href=baselocation+"/views/admin/system/system_role_list.jsp";
				}else{
					layer.alert(result.message, {icon: 2});
				}
			}
		})
	});
}
        
/*角色-启用*/
function role_start(obj,id){
	layer.confirm('确认要启用吗？',{btn: ['确定','取消'] //按钮
	}, function(){
		$.ajax({
			data:{'roleId':id,'status':1},
			dataType:'json',
			type:'post',
			url:_server+'/system/sysrole/list/audit',
			 xhrFields: {
	             withCredentials: true
	         },
	        crossDomain: true,
			success:function(result){
				if(result.code==1){
					$(obj).parents("tr").find(".td-manage").prepend('<a class="like text-info" href="javascript:void(0)" onClick="role_stop(this,'+id+')" title="冻结"><i class="glyphicon glyphicon-pause"></i></a>');
					$(obj).parents("tr").find(".td-status").html('<span class="label label-primary">正常</span>');
					$(obj).remove();
					layer.msg('已启用!',{icon: 6,time:1000});
					location.href=baselocation+"/views/admin/system/system_role_list.jsp";
				}else{
					layer.alert(result.message, {icon: 2});
				}
			}
		})
	});
}

/*菜单-编辑*/
function role_edit(id){
	location.href=baselocation+"/views/admin/system/system_role_add.jsp?id="+id;
}

/*角色-查看*/
function role_show(title,url,id,ope,w,h){
	/*if(id == null){
		layer_show(title,url,w,h);
	}else{
		layer_show(title,url+'/'+id+'/'+ope,w,h);
	}*/
	location.href=baselocation+"/views/admin/system/system_user_role.jsp";
	 
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

function load(isSearch,searchForm) {
    param.listUrl=_server+"/system/sysuser/list";
    param.isSearch=isSearch;
    DataGridUtils.loadData(param);
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

