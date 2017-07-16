var columns=[
	    { title: "全选",field: "select",checkbox: true,width: 20,align: "center",valign: "middle"},
	    { title: "编号",field: "id",halign:"center",align: "center",sortable: true },
	    { title: "昵称",field: "userName",halign:"center",align: "center",sortable: true },
	    { title: "姓名",field: "realName",halign:"center",align: "center",sortable: true },
	    { title: "手机",field: "telephone",halign:"center",align: "center",sortable: true},
	    { title: "邮箱",field: "email",halign:"center",align: "center",sortable: true},
	    { title: "注册时间",field: "createTime",halign:"center",align: "center",sortable: true},
	    { title: "最后登录时间",field: "lastLoginTime",halign:"center",align: "center",sortable: true},
	    { title: "登录IP",field: "lastLoginIp",halign:"center",align: "center",sortable: true},
	    { title: "状态",field: "status",halign:"center",align: "center",sortable: true,formatter:function(value,row,index){
	    	var s;
	    	if(row.status==1){
	    		s='<span class="label label-primary">正常</span>';
	    	}else{
	    		s='<span class="label label-primary">冻结</span>';
	    	}
	    	return s;
	    	
	    }}
	];
 var param = {};
 param.columns=columns;
 param.search=true;
 param.gridId="dataGrid"; 
 
$(document).ready(function (){
	 $.ajax({
	     url:_server+"/system/sysuser/list",
         dataType:'json',
         xhrFields: {
             withCredentials: true
         },
         crossDomain: true,
         success: function (data) {
            console.log(data);
        	initFormData(data,columns);   
         },
         error: function (result) {
        	 alert("初始化表单数据失败");
         }
     });
}	
)

/*初始化表单数据*/
function initFormData(data,columns){
	param.data=data.data.systemUsers;
	param.dataField="systemUsers";
	//创建bootsrap table
	DataGridUtils.initGrid(param);
}