//服务器地址
_serverAddress = _server+"/cod_cus/ediSeqInfo/list";
var _ListServerAddress = _server + "/cod_cus/ediSeqList/list";
//跳转页面
_jumpPage = baselocation+"/views/cod_cus/ediSeqInfo/";
var _ListJumpPage = baselocation + "/views/cod_cus/ediSeqList/";


var id=Utils.search("id");


$(function(){
	//初始化表格
	param.url=_serverAddress;
    DataGridUtils.initGridByUrl(param);
   
    //初始化日历控件
//    Utils.initCalendar();
  //初始化下拉
	initDropDown();
   //绑定事件
    BindEvent();
    //新增页面设置默认值
    if (id == null) {
//        SetDefault();
    } else {
        $("#uid").val(id);
        FormUtils.getData();
    }
   

})
//绑定事件
function BindEvent(){
 /********************返回事件********************/
    $("#reback").click(function(){
        Utils.redirect("list.jsp");
    });
/*    $("#back").click(function(){
        Utils.redirect("add.jsp");
    });
*/
    /****************绑定保存事件*************************/

    //保存
    $("#save").click(function(){
    	Validator.setValidateParam("dataForm");
        if (!Validator.validate("dataForm")) return;
		var url="/add";
		if(id!=null){
			url="/update?id="+id;
		}
			
		var saveParam={};
		saveParam.paramUrl=url;
		saveParam.dataForm="dataForm";
		FormUtils.save("dataForm",url);
	});
    /****************绑定附件操作事件*************************/
    //新增事件
    $("#Add").click(function () {
  	  showPage("fileTable", "表体-新增", _jumpPage + "upload.jsp", "add");
    });
    //修改事件
    $("#Modify").click(function () {
  	  showPage("fileTable", "表体-修改", _jumpPage + "upload.jsp", "edit");
    });
    //查阅事件
    $("#View").click(function () {
        showPage("fileTable", "表体-查阅", _jumpPage + "upload_view.jsp", "view");
    });
   //删除事件（批量删除）
    $("#Delete").click(function () {
    	
    param.gridId="fileTable"
        var detlId = getDetlId(param.gridId);
        var url = _ListServerAddress +'/'+detlId+'/delete';

        param.gridId="fileTable"
       /* param.listUrl = _serverAddress;*/
        param.serverUrl = url;
        param.url=_ListServerAddress +"?ediSeqUid=" + $("uid").val();
        DataGridUtils.deleteGrid(param);

    });
}


  
  var modelParam = {};
  modelParam.area = ["900px", "570px"];
  function showPage(gridId, title, url, optype) {
      url += "?optype=" + optype;
      if (optype == "add") {
          var ediSeqUid = $("#uid").val();
          if (ediSeqUid == "") {
              layer.alert("单据编号不存在，不能新增！");
              return;
          }
          url += "&ediSeqUid=" + ediSeqUid;
      } else {
          url += "&id=" + getDetlId(gridId);
      }

      modelParam.url = url;
      modelParam.title = title;
      modelParam.id = id;
      Utils.showModalDialog(modelParam);
  }
    
function getDetlId(gridId){
	
	 var rows = $('#' + gridId).bootstrapTable('getSelections');
     if (rows.length == 0) {
         layer.msg("未选择记录", {icon: 1, time: 1500});
         return;
     }
     var detlUid = rows[0]["uid"];
     return detlUid;
}



function initDropDown(){
	Utils.setCodesDropDown("IS_ENABLE");
	Utils.setParamDropDown("codStdAreaCode");
    //customDropDown();
}
//数据加载完后调用的方法
function __onAfterLoad(data) {
	 //附件
	var fileColumns = [
		{ title: "",field: "select",radio: true,width: 20,align: "center",valign: "middle"},
	    { title: "参数编号",field: "paramNo",align: "center",sortable: true,order: "desc"},
	    { title: "参数说明",field: "paramNote",align: "center",sortable: true },
	    { title: "是否开启",field: "status",align: "center",sortable: true },
	    { title:"排序",field: "orderNo",align: "center",sortable: true },
	  
];
var urlParam = Utils.stringFormat("?ediSeqUid={0}", id);
var param = {};
param.showToggle = false;
param.showExport = false;
param.showColumns = false;
//附件
param.columns = fileColumns;
param.gridId = "fileTable";
param.toolbar = "fileToolbar";
param.url = _server + "/cod_cus/ediSeqList/list" + urlParam;

DataGridUtils.initGridByUrl(param);
}
//渲染完下拉框的回调方法
function __onAfterLoadParam() {
FormUtils.getData();
}
//页面跳转
/*function JumpPage(id,url){
	//跳转页面
	var path = _jumpPage;
	if(url.indexOf("?")==-1)
		url+="?id="+id;
	else
		url+="&id="+id;
	Utils.redirect(url);
}*/

//列表事件
//行双击
/*function __onDblClickRow(rowdata,rowobj){
	JumpPage(rowdata.uid,"upload.jsp?optype=view");
}*/

function __onDblClickRow(row, element) {
    var gridId = element[0].offsetParent.id;
    if (gridId == "fileTable") {
    	showPage("fileTable", "表体-查阅", _jumpPage + "upload_view.jsp", "view");
    }
}

function subPageRefresh(params) {
    DataGridUtils.refresh(params);
}
/*function customDropDown(){
    $.ajax({
        url: _redisServer + '/getDictionary?dictionaryValue=DOC_TYPE',
        type: 'get',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (response) {
            var DOC_TYPE = new Array();
            $.each(response.data.DOC_TYPE,function (index,item) {
                var docTypes = {};
                docTypes['id'] = item.id;
                docTypes['text'] = item.id;
                DOC_TYPE.push(docTypes);
            });
            var docTypeArr = {};
            docTypeArr['DOC_TYPE'] = DOC_TYPE;

            Utils.initDropDown(docTypeArr);
        },
        error: function (response) {
            console.log("获取下拉数据源失败");
        }
    });
}

*/

