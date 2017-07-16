//服务器地址
_serverAddress = _server + "/cod_cus/codCusComplex/list";

//操作数组
columns = [
    { title: "",field: "select",radio: true,width: 20,align: "left",valign: "middle"},
    {title: "序号", field: "pkSeq", align: "left", sortable: true},
    {title: "HS编码", field: "codeT", align: "left", sortable: true},
    {title: "附加编码", field: "codeS", align: "left", sortable: true},
    {title: "商品名称", field: "gName", align: "left", sortable: true},
    {title: "法定单位", field: "unitName1", align: "left", sortable: true},
    {title: "法定第二单位", field: "unitName2", align: "left", sortable: true}
];
var param={};
param.columns=columns;
var height = Utils.search("height");
height = height == null ? 400 : height;
param.height = height;
var pageList = Utils.search("pageList");
pageList = pageList==null?[5,10,20,50]:pageList.split(',');
param.pageSize = pageList[0];
//页面绑定事件
$(function(){
    var codeT = Utils.search("code");// 申报编号
    $("#codeT").val(codeT);

	param.url=_serverAddress + "/chooseData";
    DataGridUtils.initGridByUrl(param);   
	//搜索事件
	// $("#search").click(function(){
     //    param.url=_serverAddress;
     //    DataGridUtils.refresh(param);
	// });
    //刷新事件
    // $("#refreshBtn").click(function () {
    //     param.url=_serverAddress;
    //     DataGridUtils.refresh(param);
    // });
	$("#affirm").click(function () {
        save();
    });
	//返回
    $("#reback").click(function () {
        Utils.closeModalDialog();
    });
});
//回车事件绑定搜索按钮
// $(document).keyup(function(event){
//   if(event.keyCode ==13){
// 	  param.url=_serverAddress;
//       DataGridUtils.refresh(param);
//   }
// });

function save() {
    var rows = $('#table').bootstrapTable('getSelections');
    if (rows.length == 0) {
        layer.msg("请选择记录", {time: 1500});
        return;
    }
    if (window.parent.valuation(rows[0]))
    	layer.msg("选择成功", {time: 1500});
        $("#reback").click();
}

