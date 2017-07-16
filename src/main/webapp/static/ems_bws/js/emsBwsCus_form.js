var id = Utils.search("id");
var viewType = Utils.search("viewType");

//服务器地址
_serverAddress = _server + Utils.stringFormat("/ems_bws/emsBws{0}Bsc/list",viewType);
var _fileServerAddress = _server + Utils.stringFormat("/ems_bws/emsBws{0}AcmpFormDt/list",viewType);
var _DtServerAddress = _server + Utils.stringFormat("/ems_bws/emsBws{0}Dt/list",viewType);
//跳转页面
_jumpPage = baselocation + Utils.stringFormat("/views/ems_bws/emsCusBsc/",viewType);
var _fileJumpPage = baselocation + Utils.stringFormat("/views/ems_bws/emsCusBwsAcmpFormDt/",viewType);
var _DtJumpPage = baselocation + Utils.stringFormat("/views/ems_bws/emsCusBwsDt/",viewType);
var id=Utils.search("id");
var optype = Utils.search("optype");


$(function(){
	param.url=_serverAddress;
    DataGridUtils.initGridByUrl(param);
   
    //初始化日历控件f
    Utils.initCalendar();
  //初始化下拉
	initDropDown();
    //页面加载设置表单需要验证
   if (optype == "view") {
        FormUtils.setPageView();
        $("#fileAdd").hide();
        $("#fileEdit").hide();
        $("#fileDelete").hide();
    } 
	
    //绑定事件
    BindEvent();
    //新增页面设置默认值
    if (id == null) {
        SetDefault();
    } else {
        $("#uid").val(id);
        FormUtils.getData();
    }

})

//绑定事件
function BindEvent(){
    /********************返回事件********************/
    $("#reback").click(function(){
        //Utils.redirect("list.jsp");
        parent.Utils.hideEditDiv();
    });
    /****************绑定附件操作事件*************************/

  //查阅事件
  $("#fileView").click(function () {
      showPage("fileTable", "附件-查阅", _fileJumpPage + "edit.jsp", "view");
  });

  /****************绑定明细操作事件*************************/

  //查阅事件
  $("#dtView").click(function () {
      showPage("dtTable", "明细-查阅", _DtJumpPage + "edit.jsp", "view");
  });
}
var modalParam = {};
var width = $(".container").width()+"px";
modalParam.area = [];
modalParam.area.unshift(width,"650px");
function showPage(gridId, title, url, optype) {
    url += "?optype=" + optype+"&viewType=" + viewType;
    if (optype == "add") {
        var seqNo = $("#seqNo").val();
        if (seqNo == "") {
            layer.alert("单据编号不存在，不能新增！");
            return;
        }
        url += "&seqNo=" + seqNo;
    } else {
        var rows = $('#' + gridId).bootstrapTable('getSelections');
        if (rows.length == 0) {
            layer.msg("未选择记录", {icon: 1, time: 1500});
            return;
        }
        id = rows[0]["uid"];
        url += "&id=" + id;
    }
    if(gridId == "fileTable") 
    	modalParam.area[1] = "300px";
    modalParam.url = url;
    modalParam.title = title;
    modalParam.id = id;
    Utils.showModalDialog(modalParam);
}
function initDropDown(){	
	Utils.setDropDown("DCL_TYPECD_BWS,EMS_TYPE,EMAPV_STUCD_BWS,DCL_ETPS_TYPE,OWNER_SYSTEM,BWL_TYPECD,APPEND_TYPECD","codStdAreaCode,codCusCustomsfec",false);
}
//设置标签值
function SetValue(id,value){
    $("#"+id).val(value);
}

//数据加载完后调用的方法
function __onAfterLoad(data) {
	 //明细
	var DtColumns = [
        {title: "", field: "select", radio: true, align: "center", valign: "middle"},
        {title: "商品序号", field: "gdsSeqno", align: "center", sortable: true, order: "asc"},
        {title: "商品料号", field: "gdsMtno", align: "center", sortable: true},
        {title: "商品编码", field: "gdecd", align: "center", sortable: true},
        {title: "商品名称", field: "gdsNm", align: "left", sortable: true},
        {title: "存储(监管）期限", field: "limitDate", align: "center", sortable: true},
        {title: "入仓数量", field: "inQty", align: "right", sortable: true},
        {title: "最近入仓(核增）日期", field: "inDate", align: "center", sortable: true},
        {title: "国别代码", field: "natcd", align: "left", sortable: true}
    ];
	
	
	 //附件
	var fileColumns = [
        {title: "", field: "select", radio: true, align: "center", valign: "middle"},
        {title: "随附单证序号", field: "acmpFormSeqno", align: "center", sortable: true, order: "desc"},
        {title: "随附单证类型", field: "acmpFormTypecd", align: "center", sortable: true},
        {title: "随附单证编号", field: "acmpFormNo", align: "center", sortable: true},
        {title: "固定编号", field: "fixdNo", align: "center", sortable: true},
        {title: "随附单证文件名称", field: "acmpFormFileNm", align: "left", sortable: true},
       // {title: "附件大小", field: "tgblLossRate", align: "right", sortable: true}
    ];
    var seqNo = $("#seqNo").val();
    var chgTmsCnt = $("#chgTmsCnt").val();
    var urlParam = Utils.stringFormat("?seqNo={0}&chgTmsCnt={1}", seqNo,chgTmsCnt);
    var param = {};
    //附件
    param.columns = fileColumns;
    param.gridId = "fileTable";
    param.toolbar = "fileToolbar";
    param.url = _fileServerAddress + urlParam;
    DataGridUtils.initGridByUrl(param);
    
    //明细
    param.columns = DtColumns;
    param.gridId = "dtTable";
    param.toolbar = "dtToolbar";
    param.url = _DtServerAddress + urlParam;
    DataGridUtils.initGridByUrl(param);
}
//渲染完下拉框的回调方法
function __onAfterInitDropDown() {
	FormUtils.getData();
}

//界面刷新方法
function subPageRefresh(param) {
  DataGridUtils.refresh(param);
}

//双击表单事件
function __onDblClickRow(row, element) {
    var gridId = element[0].offsetParent.id;
    if (gridId == "fileTable") {
        showPage("fileTable", "附件-查阅", _fileJumpPage + "edit.jsp", "view");
    }  else if (gridId == "dtTable") {
        showPage("dtTable", "明细-查阅", _DtJumpPage + "edit.jsp", "view");
    }
}


