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
		if(id=="nan-sex"){
			$(this).siblings().val("1");
		}else if(id=="nv-sex"){
			$(this).siblings().val("2");
		}else if(id=="bm-sex"){
			$(this).siblings().val("0");
		}else if(id=="open-status"){
			$(this).siblings().val("1");
		}else if(id=="close-status"){
			$(this).siblings().val("0");
		}
		$(this).parent().parent().siblings().children().children(".flag-sex").removeAttr("checked");
		$(this).parent().parent().siblings().children().children(".flag-status").removeAttr("checked");
	});
	
});

//表单验证-添加用户验证
$(function(){

	var id = Utils.search("id");
	if(id==null){
        //添加
		// $("#create-user").show();
		// $("#line-dashed").show();
        $("input[name='loginName']").removeAttr("readonly");
        $("input[name='loginPassword']").removeAttr("readonly");
		$.ajax({
		    url:_server+"/system/sysuser/list/add",
			type: 'get',
			dataType:'json',
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function (data) {
				console.log(data);
				//初始化表单数据
				initFormData(data,id);
				//单选框元素默认选中
				$("#nan-sex").attr("checked","checked");
				$("#open-status").attr("checked","checked");
				$("#nan-sex").parent().addClass("checked");
				$("#open-status").parent().addClass("checked");
			},
			error: function (data) {
				alert("加载数据异常");
			}
		});
	}else{

		//编辑
		// $("#create-user").hide();
		// $("#line-dashed").hide();
        $("input[name='loginName']").attr("readonly","readonly");
        $("input[name='loginPassword']").attr("readonly","readonly");
		 $.ajax({
		        // url:"http://192.168.1.105:8088/bssp-admin/system/main",
			 	 url:_server+'/system/sysuser/list/'+id+'/edit',
		         type: 'get',
		         dataType:'json',
		         xhrFields: {
		             withCredentials: true
		         },
		         crossDomain: true,
		         success: function (data) {
		         //$("#show-title").innerText="创建菜单";
		         console.log(data);
		         FormUtils.initForm(data.data.systemUser);
		         initFormData(data,id);
		         //单选框选中
		         if(data.data.systemUser.sex==1){
		        	 $("#nan-sex").attr("checked","checked");
		        	 $("#nan-sex").parent().addClass("checked");
		         }else if(data.data.systemUser.sex==2){
		        	 $("#nv-sex").attr("checked","checked");
		        	 $("#nv-sex").parent().addClass("checked");
		         }else if(data.data.systemUser.sex==0){
		        	 $("#bm-sex").attr("checked","checked");
		        	 $("#bm-sex").parent().addClass("checked");
		         }
		         //状态选中
		         if(data.data.systemUser.status==1){
		        	 $("#open-status").attr("checked","checked");
		        	 $("#open-status").parent().addClass("checked");
		         }else{
		        	 $("#close-status").attr("checked","checked");
		        	 $("#close-status").parent().addClass("checked");
		         }
		         //用户类型选中
		         if(data.data.systemUser.userType==1){
		        	 $("#close-userType").attr("checked","checked");
		        	 $("#close-userType").parent().addClass("checked");
		         }else{
		        	 $("#open-userType").attr("checked","checked");
		        	 $("#open-userType").parent().addClass("checked");
		         }
		         },
		         error: function (data) {
		        	 alert("数据加载异常");
		         }
		     });
	}
})


//表单验证-添加管理员验证
$(function(){
	$('#systemuserform').bootstrapValidator({
        container: 'tooltip',
	    message: 'This value is not valid',
	    feedbackIcons: {
	        valid: 'glyphicon glyphicon-ok',
	        invalid: 'glyphicon glyphicon-remove',
	        validating: 'glyphicon glyphicon-refresh'
	    },
	    fields: {
	    	'systemUser.loginName': {
	            message: '用户名验证失败',
	            validators: {
	                notEmpty: {
	                    message: '用户名不能为空'
                    },
                    regexp: {
                        regexp: /^A-Za-z0-9+$/,
                        message: '用户名只允许由英文和数字组成'
                    }
	            }
	        },
	    	'systemUser.loginPassword': {
	            message: '密码验证失败',
	            validators: {
	                notEmpty: {
	                    message: '密码不能为空'
	                }
	            }
	        },
	        'systemUser.telephone': {
	            validators: {
	                notEmpty: {
	                    message: '移动电话不能为空'
	                },
	                regexp: {
	                    regexp: /^1[3|4|5|7|8]\d{9}$/,
	                    message: '手机号码格式不正确'
	                }
	            }
	        },
	        'systemUser.email': {
	            validators: {
	                notEmpty: {
	                    message: '电子邮箱不能为空'
	                },
	                regexp: {
	                    regexp: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
	                    message: '电子邮箱格式不正确'
	                }
	            }
	        }
	    }
	})
})

//添加表单时初始化表单数据
function initFormData(data,id){
	var systemUser = data.data.systemUser;
	var loginUserType = data.data.loginUserType;//当前登录用户的用户类型
    FormUtils.initForm(systemUser);
    if (loginUserType == "0") {
        $("input[name='tradeCode']").removeAttr("readonly");
        $("input[name='entName']").removeAttr("readonly");
        $(".bsspuser").show();
    }


	var roleAllArr = data.data.systemRoles;//所有角色
	var roleArr = data.data.systemRoleList;//分配角色
	var roleStr="";
	var flag = true;
	if(id==null && loginUserType == "0"){
		if (roleAllArr.length>0) {
			for(var i=0;i<roleAllArr.length;i++){
				roleStr+="<div class='checkbox col-sm-3'>" +
				"<label> " +
				" <input type='checkbox' name='roleId' value='"+roleAllArr[i].id+"'/>&nbsp&nbsp"+roleAllArr[i].roleName+
				"</label>" +
				"</div>";
			}
		}
	}else{
		if (roleAllArr.length>0) {
			for(var i=0;i<roleAllArr.length;i++){
				flag = true;
				for(var j=0;j<roleArr.length;j++){
					if(roleArr[j].roleId==roleAllArr[i].id){
						roleStr+="<div class='checkbox col-sm-3'>" +
						"<label> " +
						" <input type='checkbox' name='roleId' value='"+roleAllArr[i].id+"' checked='checked'/>&nbsp&nbsp"+roleAllArr[i].roleName+
						"</label>" +
						"</div>";
						flag = false;
						break;
					}
				}
				if(flag){
					roleStr+="<div class='checkbox col-sm-3'>" +
					"<label> " +
					" <input type='checkbox' name='roleId' value='"+roleAllArr[i].id+"'/>&nbsp&nbsp"+roleAllArr[i].roleName+
					"</label>" +
					"</div>";
				}
			}
		}	
	}
	$("#sys-role").append(roleStr);
}


/*管理员-编辑*/
$(function() {
	$("#sysusersubmit").click(function() {
        if (!Validator.validate("systemuserform")) return;
        var theUserType = $("input[name='userType']:checked").val();
		/*用户名验证*/
        var userId = $("input[name='loginName']").val();
        var e = /^[A-Za-z0-9]+$/;
        if (userId.length != 0) {
            var result = e.test(userId);
            if (result) {

            } else {
                layer.msg("用户名应由英文和数字组成!", {

                    time: 1500
                });
                return false;
            }
        } else {
            layer.msg("用户名不能为空！", {

                time: 1500
            });
            return false;
        }
		/*密码验证*/
        var loginPassword = $("input[name='loginPassword']").val();
        if (loginPassword.length == 0) {
            layer.msg("密码不能为空！", {

                time: 1500
            });
            return false;
        }
		/*账号名称*/
        var userName = $("input[name='userName']").val();
        if (userName.length == 0) {
            layer.msg("账号名称不能为空！", {

                time: 1500
            });
            return false;
        }
		/*真实名字*/
        var realName = $("input[name='realName']").val();
        if (realName.length == 0) {
            layer.msg("真实名字不能为空！", {

                time: 1500
            });
            return false;
        }


        if(theUserType == "1") {
            if($("input[name='tradeCode']").val() == ""){
                layer.msg("企业编号不能为空!", {

                    time : 1500
                });
                return;
            }
            if($("input[name='entName']").val() == ""){
                layer.msg("企业名称不能为空!", {

                    time : 1500
                });
                return;
            }
        }

        var params = Utils.jsonByForm($("#systemuserform"));
		$.ajax({
			data : params,
			dataType : 'json',
			type : 'post',
			url : _server + '/system/sysuser/list/save',
			xhrFields: {
		             withCredentials: true
		         },
		    crossDomain: true,
			success : function(result) {
				if (result.code == 13 || result.code == 12) {
				layer.msg(result.message,{time:1500},function () {
                    location.href=baselocation+"/views/admin/system/system_user_list.jsp";
                });
                //code=13表示用户修改成功
	        /*    	param.url=_server+"/system/sysuser/list";
	                DataGridUtils.refresh(param);   */

				} else{
                    layer.msg(result.message,{time:1500});
				}
			}
		})
	})
});
$(function(){
    $('#systemuserform input').keypress(function(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
        }
    });
});