 // 多选框插件
$(document).ready(function() {
	$('input').iCheck({
		checkboxClass : 'icheckbox_flat-green',
		radioClass : 'iradio_flat-green'
	});
	//单选框选中处理
	$('.iCheck-helper').click(function () { 
		$(this).siblings().attr("checked","checked");
		var id = $(this).siblings().attr("id");
		if(id=="opr-type"){
			$(this).siblings().val("0");
		}else if(id=="menu-type"){
			$(this).siblings().val("1");
		}else if(id=="func-type"){
			$(this).siblings().val("2");
		}else if(id=="open-status"){
			$(this).siblings().val("1");
		}else if(id=="close-status"){
			$(this).siblings().val("0");
		}
		$(this).parent().parent().siblings().children().children(".menu-type").removeAttr("checked");
		$(this).parent().parent().siblings().children().children(".flag-status").removeAttr("checked");
	}); 
	
});


//表单验证-添加管理员验证
$(function(){
	$('#systemmenuform').bootstrapValidator({
        container: 'tooltip',
	    message: 'This value is not valid',
	    feedbackIcons: {
	        valid: 'glyphicon glyphicon-ok',
	        invalid: 'glyphicon glyphicon-remove',
	        validating: 'glyphicon glyphicon-refresh'
	    },
	    fields: {
	    	'menuName': {
	            message: '菜单名验证失败',
	            validators: {
	                notEmpty: {
	                    message: '菜单用户名不能为空'
	                }
	            }
	        },
	    	'sort': {
	            message: '菜单排序验证失败',
	            validators: {
	                notEmpty: {
	                    message: '菜单排序不能为空'
	                }
	            }
	        }
	    }
	})
	var id = Utils.search("id");
	if(id==null){
		//添加
		$.ajax({
		    url:_server+"/system/sysmenu/list/add",
			type: 'get',
			dataType:'json',
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function (data) {
				//console.log(data);
				//初始化表单数据
				initFormData(data,id);
				//单选框元素默认选中
				 $("#menu-type").attr("checked","checked");
				 $("#open-status").attr("checked","checked");
				 $("#menu-type").parent().addClass("checked");
				 $("#open-status").parent().addClass("checked");
			},
			error: function (data) {
				alert("加载数据异常");
			}
		});
		
	}else{
		//编辑
		//FormUtils.initForm();
		 $.ajax({
		         url:_server+'/system/sysmenu/list/edit',
		     	 type:'post',
				 dataType:'json',
				 data: {"id":id},
		         xhrFields: {
		             withCredentials: true
		         },
		         crossDomain: true,
		         success: function (data) {
		         console.log(data);
		         //$("#show-title").innerText="创建菜单";
		         initFormData(data,id);
		         FormUtils.initForm(data.data.systemMenu);
		         //菜单类型选中
		         if(data.data.systemMenu.menuType==0){
		        	 $("#opr-type").attr("checked","checked");
		        	 $("#opr-type").parent().addClass("checked");
		         }else if(data.data.systemMenu.menuType==1){
		        	 $("#menu-type").attr("checked","checked");
		        	 $("#menu-type").parent().addClass("checked");
		         }else if(data.data.systemMenu.menuType==2){
		        	 $("#func-type").attr("checked","checked");
		        	 $("#func-type").parent().addClass("checked");
		         }
		         //状态选中
		         if(data.data.systemMenu.status==1){
		        	 $("#open-status").attr("checked","checked");
		        	 $("#open-status").parent().addClass("checked");
		         }else{
		        	 $("#close-status").attr("checked","checked");
		        	 $("#close-status").parent().addClass("checked");
		         }
		         },
		         error: function (data) {
		        	 console.log(data);
		        	 alert("加载数据异常");
		         }
		     });
	}
})

//添加表单时初始化表单数据
function initFormData(data,id){
	if(id!=null){
		var menuArr = data.data.menuList;
		var menuStr="";
		if (menuArr.length>0) {
			for(var i=0;i<menuArr.length;i++){
				if(data.data.systemMenu.parentId==menuArr[i].id){
					menuStr+=" <option data-parent='"+menuArr[i].id+"' selected='selected'>"+menuArr[i].menuName+"</option>";
				}else{
					menuStr+=" <option data-parent='"+menuArr[i].id+"'>"+menuArr[i].menuName+"</option>";
				}
				var subMenuArr = menuArr[i].childMenuList;
				if(subMenuArr.length>0){
					//console.log(subMenuArr);
					for(var j=0;j<subMenuArr.length;j++){
						if(data.data.systemMenu.parentId==subMenuArr[j].id){
							menuStr+= " <option data-parent='"+subMenuArr[j].parentId+"' selected='selected'>"+subMenuArr[j].menuName+"</option>";
						}else{
							menuStr+= " <option data-parent='"+subMenuArr[j].parentId+"'>"+subMenuArr[j].menuName+"</option>";
						}
					}
				}
			}
		}
	}else{
		var menuArr = data.data.menuList;
		var menuStr="";
		if (menuArr.length>0) {
			for(var i=0;i<menuArr.length;i++){
					menuStr+=" <option data-parent='"+menuArr[i].id+"'>"+menuArr[i].menuName+"</option>";
				var subMenuArr = menuArr[i].childMenuList;
				if(subMenuArr.length>0){
					for(var j=0;j<subMenuArr.length;j++){
							menuStr+= " <option data-parent='"+subMenuArr[j].parentId+"'>"+subMenuArr[j].menuName+"</option>";
					}
				}
			}
		}
	}
	//console.log(menuStr);
	$("#root-option").after(menuStr);
}

//var index = parent.layer.getFrameIndex(window.name); //获取窗口索引

/*菜单-提交*/
$(function() {
	$(".sysmenusubmit").click(function() {
		var params = '';
		$("#systemmenuform input").each(function() {
			params += $(this).serialize() + "&";
		});
		var parentId = $('#systemMenuParent').find("option:selected").attr("data-parent");
		params += "systemMenu.parentId="+parentId;
		console.log(params);
		$.ajax({
			data : params,
			dataType : 'json',
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			type : 'post',
			url :_server+'/system/sysmenu/list/save',
			success : function(result) {
				//console.log(result.code);
				if (result.code!=6) {
					layer.msg(result.message, {
						shade : 0.3,
						time : 1500
					}, function() {
						//window.parent.location.reload(); // 刷新父页面
						location.href=baselocation+"/views/admin/system/system_menu_list.jsp";
					});
				} else {
					layer.msg(result.message, {
						icon : 2,
						time : 1000
					});
				}
			},
	         error: function (result) {
	        	 console.log(result);
	        	 alert("保存失败！");
	         }
		})
	})
})