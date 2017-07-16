var columns=[
    { title: "全选",field: "select",checkbox: true,width: 20,align: "center",valign: "middle"},
    { title: "登录时间",field: "loginTime",halign:"center",align: "center",sortable: true },
    { title: "登录IP",field: "userIp",halign:"center",align: "center",sortable: true },
    { title: "操作系统",field: "operatingSystem",halign:"center",align: "center",sortable: true },
    { title: "游览器",field: "browser",halign:"center",align: "center",sortable: true },
    
];
var param = {};
param.columns=columns;
param.search=true;
param.gridId="dataGrid"
/*多选按钮插件*/
/*$(document).ready(function(){
  $('input').iCheck({
    checkboxClass: 'icheckbox_flat-green',
    radioClass: 'iradio_flat-green'
  });
});*/


//表单验证
$(function(){
	/*$('#form-info').bootstrapValidator({
        container: 'tooltip',
	    message: 'This value is not valid',
	    feedbackIcons: {
	        valid: 'glyphicon glyphicon-ok',
	        invalid: 'glyphicon glyphicon-remove',
	        validating: 'glyphicon glyphicon-refresh'
	    },
	    fields: {
	    	'systemUser.userName': {
	            message: '用户名验证失败',
	            validators: {
	                notEmpty: {
	                    message: '用户名不能为空'
	                }
	            }
	        },
	    	'systemUser.realName': {
	            message: '真实姓名验证失败',
	            validators: {
	                notEmpty: {
	                    message: '真实姓名不能为空'
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
	        },
	        'systemUser.sex': {
	            validators: {
	                notEmpty: {
	                    message: '年龄不能为空'
	                },
	                regexp: {
	                    regexp: /^(?:[1-9][0-9]?|1[01][0-9]|120)$/,
	                    message: '年龄格式不正确'
	                }
	            }
	        }
	    }
	})*/

	 $.ajax({
		 	 url:_server+"/system/sysuser/info",
	         type: 'get',
	         dataType:'json',
	         xhrFields: {
	             withCredentials: true
	         },
	         crossDomain: true,
	         success: function (data) {
	           FormUtils.initForm(data.data.systemUser);
	           initFormData(data);
	           console.log(data.data);
	           if(data.data.systemUser.sex==1){
	        	   $("#sex").val('男');
	           }else if(data.data.systemUser.sex==2){
	        	   $("#sex").val('女');
	           }else if(data.data.systemUser.sex==0){
	        	   $("#sex").val('保密');
	           }
	           $("#user-role").val(data.data.userRole);
	         },
	         error: function (data) {
	        	 alert("加载数据异常");
	         }
	     });
	
})
//初始化表单数据
function initFormData(data){
	param.data=data.data.systemUserLoginLogList;
	param.dataField="systemUserLoginLogList";
	//创建bootsrap table
	DataGridUtils.initGrid(param);

}
//按钮点击事件
/*修改信息*/
function modify(){
	 $('.form-disabled').attr("disabled", false);
	 $('#sex').hide();
	 $('.add-radio').show();
	 $('.form-group').find('.btn-success').css({'display':'block'});
};
/*保存信息*/
function save_info(){
	 var params='';
	 $("#system-info input").each(function(){
		params+=$(this).serialize()+"&";
     }); 
	 $.ajax({
		 data:params,
		 dataType:"json",
		 type:"post",
		 url:_server+'/system/sysuser/info/edit',
		 xhrFields: {
	             withCredentials: true
	         },
	     crossDomain: true,
		 success:function(result){
			 if(result.code == 1){
				/* $('.form-disabled').attr("disabled", true);
				 $('#sex').show();
				 $('.add-radio').hide();
				 $('.form-group').find('.btn-success').css({'display':'none'});*/
				 location.href=baselocation+"/views/admin/system/system_user_info.jsp";
			 }else{
				  layer.alert(result.message,{
		              title: '提示框',				
					  icon:0,
				  });
				  return false;
			 }
		 }
	})
};

/*修改密码*/
function change_Password(){
  layer.open({
  type: 1,
  title:'修改密码',
  skin: 'layui-layer-rim', //加上边框
  area: ['420px', '295px'], //宽高
  content: $('#change_Pass'),
  btn:['确认修改'],
  yes:function(index, layero){		
		   if ($("input[name='nowPassword']").val()==""){
			  layer.alert('原密码不能为空!',{
              title: '提示框',				
			  icon:0,
			 });
			return false;
          } 
		  if ($("input[name='newPassword']").val()==""){
			  layer.alert('新密码不能为空!',{
              title: '提示框',				
			  icon:0,
			 });
			return false;
          } 
		  if ($("input[name='confirmPwd']").val()==""){
			  layer.alert('确认新密码不能为空!',{
              title: '提示框',				
			  icon:0,
			 });
			return false;
          }
		  if($("input[name='confirmPwd']").val() != $("input[name='newPassword']").val()){
            layer.alert('密码不一致!',{
              title: '提示框',				
			  icon:0,
			 });
			 return false;
         }
		 var params='';
		 $("#change_Pass input").each(function(){
			params+=$(this).serialize()+"&";
	     }); 
		 $.ajax({
			 data:params,
			 dataType:"json",
			 type:"post",
			 url:_server+'/system/sysuser/info/edit/psw',
			 xhrFields: {
	             withCredentials: true
	         },
	         crossDomain: true,
			 success:function(result){
			 	 //code=18表示密码修改成功
				 if(result.code == 18){
					  layer.alert(result.message,{
			               title: '提示框',				
						   icon:1,		
					  }); 
					  layer.close(index);
					  $("input[name='confirmPwd']").val("");
					  $("input[name='newPassword']").val("");
					  $("input[name='nowPassword']").val("");
				 }else{
					  layer.alert(result.message,{
			              title: '提示框',				
						  icon:0,
					  });
					  return false;
				 }
			 }
		})
	}
  });
}