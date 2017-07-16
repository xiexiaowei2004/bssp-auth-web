
$(document).ready(function() {
	 // 多选框插件
	$('input').iCheck({
		checkboxClass : 'icheckbox_flat-green',
		radioClass : 'iradio_flat-green'
	});
	//单选框选中处理
	$('.iCheck-helper').click(function () { 
		$(this).siblings().attr("checked","checked");
		var id = $(this).siblings().attr("id");
		if(id=="is-system"){
			$(this).siblings().val("1");
		}else if(id=="no-system"){
			$(this).siblings().val("0");
		}else if(id=="open-status"){
			$(this).siblings().val("1");
		}else if(id=="close-status"){
			$(this).siblings().val("0");
		}
		$(this).parent().parent().siblings().children().children(".flag-system").removeAttr("checked");
		$(this).parent().parent().siblings().children().children(".flag-status").removeAttr("checked");
	}); 
	
	var id = Utils.search("id");
	//创建角色
	if(id==null){
		$.ajax({
			url:_server+"/system/sysrole/list/add",
			type:'get',
			dataType:'json',
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function (data) {
				console.log(data);
				//单选框元素默认选中
				 $("#is-system").attr("checked","checked");
				 $("#open-status").attr("checked","checked");
				 $("#is-system").parent().addClass("checked");
				 $("#open-status").parent().addClass("checked");
				//FormUtils.initForm(data.data.jsonMenu);
				initMenuTree(data.data.jsonMenu);
			},
			error: function (data) {
				alert("初始化表单数据失败");
			}
		});
	}else{
        var timer;
		$.ajax({
	         url:_server+'/system/sysrole/list/'+id+'/edit',
	     	 type:'get',
			 dataType:'json',
			 data: {"id":id},
	         xhrFields: {
	             withCredentials: true
	         },
	         crossDomain: true,

            beforeSend: function () {
                timer = layer. load();
            },
            complete:function () {
                layer.close(timer);
            },
	         success: function (data) {
	         console.log(data);
	         //$("#show-title").innerText="创建菜单";
	         FormUtils.initForm(data.data.systemRole);
	         //单选框选中
	         if(data.data.systemRole.isSystem==1){
	        	 $("#is-system").attr("checked","checked");
	        	 $("#is-system").parent().addClass("checked");
	         }else if(data.data.systemRole.isSystem==0){
	        	 $("#no-system").attr("checked","checked");
	        	 $("#no-system").parent().addClass("checked");
	         }
	         //状态选中
	         if(data.data.systemRole.status==1){
	        	 $("#open-status").attr("checked","checked");
	        	 $("#open-status").parent().addClass("checked");
	         }else{
	        	 $("#close-status").attr("checked","checked");
	        	 $("#close-status").parent().addClass("checked");
	         }

			 //用户类型选中
			 if(data.data.systemRole.roleType==1){
				 // $("#close-roleType").attr("disable","true");
				 $("#close-roleType").attr("checked","checked");
				 $("#close-roleType").parent().addClass("checked");
			 }else{
				 $("#open-roleType").attr("checked","checked");
				 $("#open-roleType").parent().addClass("checked");
			 }
	         initMenuTree(data.data.jsonMenu);
	         },
	         error: function (data) {
	        	 console.log(data);
	        	 alert("加载数据异常");
	         }
	     });
	}
});

var ztreeObject;
var setting = {
		data: {
			simpleData: {
				enable: true,
				idKey: "id",
				pIdKey: "parentId",
				rootPId: 0
			},
			key: {
				name:'menuName',
				title:'menuName'
			}
		},
		check:{
			enable:true,
			nocheckInherit:true
		}
	};

/**初始化菜单树*/
function initMenuTree(treedata){
	// console.log(treedata);
	//treedata = eval('('+treedata+')');
	ztreeObject = $.fn.zTree.init($("#ztreedemo"), setting, treedata);
	//展开所有节点
	ztreeObject.expandAll(true);
}

//var index = parent.layer.getFrameIndex(window.name); //获取窗口索引

/*菜单-编辑*/
$(function() {
	$(".sysrolesubmit").click(function() {
		var params = '';
		$("#systemRoleform input").each(function() {
			params += $(this).serialize() + "&";
		});
		ztreeObject = $.fn.zTree.getZTreeObj("ztreedemo");
		var nodes = ztreeObject.getCheckedNodes(true);
		var menuIds='';
		if(nodes!=null && nodes.length>0){
			for(var i=0;i<nodes.length;i++){
				menuIds+=nodes[i].id+',';
			}
		}
		params += "menuIds="+menuIds;
		$.ajax({
			data : params,
			dataType : 'json',
			type : 'post',
			url : _server + '/system/sysrole/list/save',
		     xhrFields: {
	             withCredentials: true
	         },
	         crossDomain: true,
			success : function(result) {
				if (result.code != 0) {
					layer.msg(result.message, {
						shade : 0.3,
						time : 1500
					}, function() {
						//window.parent.location.reload(); // 刷新父页面
						location.href=baselocation+"/views/admin/system/system_role_list.jsp";
					});
				} else {
					layer.msg(result.message, {
						icon : 2,
						time : 1000
					});
				}
			},
			error:function (XMLHttpRequest, textStatus, errorThrown) { 
				alert(XMLHttpRequest.status);
				alert(XMLHttpRequest.readyState);
				alert(textStatus);
				alert(errorThrown);

			} 

		})
	})
})