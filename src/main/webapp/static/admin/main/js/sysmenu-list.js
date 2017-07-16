//列配置
var columns=[
    { title: "全选",field: "select",checkbox: true,width: 20,align: "center",valign: "middle"},
    { title: "菜单名称",field: "menuName",halign:"center",align: "center",sortable: true },
    { title: "链接地址",field: "href",halign:"center",align: "center",sortable: true },
    { title: "图标",field: "icon",halign:"center",align: "center",sortable: true },
    { title: "权限标识",field: "permission",halign:"center",align: "center",sortable: true },
    { title: "创建时间",field: "createTime",halign:"center",align: "center",sortable: true },
    { title: "状态",field: "status",halign:"center",align: "center",sortable: true,formatter:function(value,row,index){
    	var s;
    	if(row.status==1){
    		s='<span class="label label-primary">正常</span>';
    	}else{
    		s='<span class="label label-primary">冻结</span>';
    	}
    	return s;
    	
    }},
    { title: "排序",field: "sort",halign:"center",align: "center",sortable: true },
    { title: '操作',field: 'id',align: 'center',formatter:function(value,row,index){  
     var f;
     if(row.status==1){
    	 f = '<a class="like text-info" href="javascript:void(0)" onClick="menu_stop(this,\''+ row.id +'\')" title="冻结"><i class="glyphicon glyphicon-pause"></i></a>';
     }else{
    	 f = '<a class="like text-info" href="javascript:void(0)" onClick="menu_start(this,\''+ row.id +'\')" title="启用"><i class="glyphicon glyphicon-play"></i></a>';
     }
     var e = '<a href="#" mce_href="#" onclick="menu_edit(\''+row.id+'\')" title="编辑"><i class="glyphicon glyphicon-edit"></i></a> ';  
     var d = '<a href="#" mce_href="#" onclick="menu_del(this,\''+ row.id +'\')" title="删除"><i class="glyphicon glyphicon-remove"></i></a> ';  
     //var l = '<a href="#" mce_href="#" onclick="look(\''+ row.id +'\')" title="查阅"><i class="glyphicon glyphicon-search"></i></a> ';
          return f+e+d;  
      } 
    }
];
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

	 $.ajax({
		     url:_server+"/system/sysmenu/list",
	         dataType:'json',
	         xhrFields: {
	             withCredentials: true
	         },
	         crossDomain: true,
	         success: function (data) {
	           //console.log(data);
	           initFormData(data,columns);
	           paramData = data.data;
	         },
	         error: function (data) {
	        	 alert("初始化表单数据失败");
	         }
	     });
	//新增事件
		$("#add").click(function(){
			location.href=baselocation+"/views/admin/system/system_menu_add.jsp";
		});
		//删除事件
	/*	$("#delete").click(function(){
			var url=_server+'/system/sysmenu/list/deleteByList';
			param.listUrl=_server+"/system/sysmenu/list";
			param.idField="id";
			param.serverUrl=url;
			DataGridUtils.deleteGrid(param);
		});*/
})

/*初始化表单数据*/
function initFormData(data,columns){
	param.data=data.data.menuList;
	param.dataField="menuList";
	//创建bootsrap table
	DataGridUtils.initGrid(param);
}

//页面列表 (isSearch：是否是查询，searchForm:查询form表单的Id（id是searchForm可不传）)
function load(isSearch,searchForm) {
    var url = _server+"/system/sysmenu/list";
    param.listUrl=url;
    param.isSearch=isSearch;
    DataGridUtils.loadData(param);
}


/*菜单-删除*/
function menu_del(obj,id){
	layer.confirm('确认要删除吗？',{btn: ['确定','取消'] //按钮
	}, function(){
		$.ajax({
			url:_server+'/system/sysmenu/list/'+id+'/delete',
			type:'post',
			dataType:'json',
			data: {"id":id},
		    xhrFields: {
	            withCredentials: true
	        },
	        crossDomain: true,
			success:function(result){
	            if (result.code==1){
	            	layer.msg(result.message,{icon:1,time:1000});
	            	//param.url=_server+"/system/sysmenu/list";
	                //DataGridUtils.refresh(param);
	            	location.href=baselocation+"/views/admin/system/system_menu_list.jsp";
	            }else{
	            	layer.msg(result.message,{icon:2});
	            }
			}
		})
	});
}

/*菜单-冻结*/
function menu_stop(obj,id){
	layer.confirm('确认要冻结吗？',{btn: ['确定','取消'] //按钮
	}, function(){
		$.ajax({
			data:{'menuId':id,'status':0},
			dataType:'json',
			type:'post',
			url:_server+'/system/sysmenu/list/audit',
			xhrFields: {
	            withCredentials: true
	        },
	        crossDomain: true,
			success:function(result){
				console.log(result);
				if(result.code==1){
					$(obj).parents("tr").find(".td-manage").prepend('<a class="like text-info" href="javascript:void(0)" onClick="menu_start(this,'+id+')" title="启用"><i class="glyphicon glyphicon-play"></i></a>');
					$(obj).parents("tr").find(".td-status").html('<span class="label label-danger">冻结</span>');
					$(obj).remove();
					layer.msg('已冻结!',{icon: 5,time:1000});
				/*	param.url=_server+"/system/sysmenu/list";
	                DataGridUtils.refresh(param);   */
					location.href=baselocation+"/views/admin/system/system_menu_list.jsp";
				}else{
					layer.alert(result.message, {icon: 2});
				}
			}
		})
	});
}
        
/*菜单-启用*/
function menu_start(obj,id){
	layer.confirm('确认要启用吗？',{btn: ['确定','取消'] //按钮
	}, function(){
		$.ajax({
			data:{'menuId':id,'status':1},
			dataType:'json',
			type:'post',
			url:_server+'/system/sysmenu/list/audit',
			xhrFields: {
	            withCredentials: true
	        },
	        crossDomain: true,
			success:function(result){
				console.log(result);
				if(result.code==1){
					$(obj).parents("tr").find(".td-manage").prepend('<a class="like text-info" href="javascript:void(0)" onClick="menu_stop(this,'+id+')" title="冻结"><i class="glyphicon glyphicon-pause"></i></a>');
					$(obj).parents("tr").find(".td-status").html('<span class="label label-primary">正常</span>');
					$(obj).remove();
					layer.msg('已启用!',{icon: 6,time:1000});
					/*param.url=_server+"/system/sysmenu/list";
	                DataGridUtils.refresh(param);*/
					location.href=baselocation+"/views/admin/system/system_menu_list.jsp";
				}else{
					layer.alert(result.message, {icon: 2});
				}
			}
		})
	});
}

/*菜单-编辑*/
function menu_edit(id){
	location.href=baselocation+"/views/admin/system/system_menu_add.jsp?id="+id;
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

