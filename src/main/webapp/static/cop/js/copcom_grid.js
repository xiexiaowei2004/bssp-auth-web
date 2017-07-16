//服务器地址
var _serverAddress = _server+"/cop/copEnt/list";
//跳转页面
var _jumpPage = baselocation+"/views/cop/copEnt/";
//操作数组
var columns=[
    { title: "",field: "select",radio: true,width: 20,align: "center",valign: "middle"},
    { title: "企业备案号",field: "seqNo",align: "left",sortable: true,order: "desc"},
    { title: "企业海关代码",field: "tradeCode",align: "center",sortable: true },
    { title: "社会信用代码",field: "copGbCode",align: "center",sortable: true },
    { title: "企业名称",field: "entName",align: "left",sortable: true },
    { title: "有效标识",field: "validFlag",align: "center",sortable: true },  
    { title: "有效日期",field: "validDate",align: "center",sortable: true,formatter:function(value,row,index){
  	  var datetime = row.validDate;
        if (datetime != "" && datetime != null) {
            return datetime.substring(0, 10);
        } else {
            return datetime;
        }
    } },
    { title: "操作时间",field: "updateTime",align: "center",sortable: true },
    { title: "主管海关",field: "customsCode",align: "center",sortable: true },
    { title: "监管场所",field: "areaCode",align: "center",sortable: true }
	];
param.columns = columns;
param.url = _serverAddress;

$(function(){
    //匹配查询或企业备案
    var findCop = Utils.search("findCop");
    isFind(findCop);
	//开始时间
	$('#updateTimeStart').datepicker().on('changeDate',function(e){  
	    var startTime = e.date;
	    $('#updateTimeEnd').datepicker('setStartDate',startTime);	      
	});
	//结束时间：  
	$('#updateTimeEnd').datepicker({}).on('changeDate',function(e){  
	    var endTime = e.date;  
	    $('#updateTimeStart').datepicker('setEndDate',endTime);  
	});
    /**
     * 条件搜索
     */
    $("#search").click(function () {
        DataGridUtils.refresh(param);
    });
    /**
     * 刷新页面
     */
    $("#refresh").click(function () {
        window.location.reload();
    });
    /**
     * 查阅
     */
    $("#find").click(function () {
        var rowData = DataGridUtils.getRowDatas();//获取当前行数据
        param.jumPageUrl = _jumpPage + 'edit.jsp'+ spliceParam(true,{'optype':'view','findCop':findCop,'id':rowData.uid,'seqNo':rowData.seqNo});
        DataGridUtils.view(param);
    });
    /**
     * 新增跳转
     */
    $("#add").click(function(){
        $.ajax({
            url: _server + "/cop/copEnt/list/checkRepeat",
            dataType:'json',
            type: 'POST',
            contentType : 'application/json;charset=utf-8',
            traditional:true,
            xhrFields: { withCredentials: true },
            crossDomain: true,
            success:function (result) {
                if(result.code != 1){
                    layer.msg(result.message, { time :1500 });
                }else{
                    if(result.entity -0 >0){
                        layer.msg("本企业备案信息已存在，不能新建！", { time :1500 });
                        return;
                    } else {
                        Utils.showEditDiv(_jumpPage + "edit.jsp" + spliceParam(true,{'optype':'add','findCop':findCop}));
                        /*Utils.redirect(_jumpPage + "edit.jsp" + spliceParam(true,{'optype':'add','findCop':findCop}));*/
                    }
                }
            },
            error:function (result) {
                layer.alert("数据异常,请重新加载！");
            }
        });

    });

    /**
     * 编辑跳转
     */
    $("#edit").click(function () {
        var rowData = DataGridUtils.getRowDatas();//获取当前行数据
        param.jumPageUrl = _jumpPage + 'edit.jsp' + spliceParam(true,{'optype':'edit','findCop':findCop,'id':rowData.uid,'seqNo':rowData.seqNo});
        DataGridUtils.modify(param);
    });
    /**
     * 批量删除(级联删除)
     */
	$("#remove").click(function(){
	    //通过seqNo执行级联删除
		param.serverUrl = _serverAddress + '/deleteByList';
        param.idField = 'seqNo';
		DataGridUtils.deleteGrid(param);
	});
    /**
     * 初始化表格
     */
    DataGridUtils.initGridByUrl(param);
    /**
     * 初始化日期插件
     */
    Utils.initCalendar();
    /**
     * 初始化下拉框
     */
    Utils.setCodesDropDown('IS_VALIDATE');
});
/**
 * 表格行双击事件
 */
function __onDblClickRow(row) {
    var findCop = Utils.search("findCop");
    var rowData = DataGridUtils.getRowDatas();//获取当前行数据
    param.jumPageUrl = _jumpPage + 'edit.jsp' + spliceParam(true,{'optype':'view','findCop':findCop,'id':rowData.uid,'seqNo':rowData.seqNo});
    DataGridUtils.view(param);
}

function isFind(findCop) {
    if (findCop != '1'){
        $('#add,#edit,#remove').remove();
    }
}
/**
 * 拼接参数
 * @param isFirst true./第一个参数
 * @param jsonObj json对象 例{'name':'张三','age':'24'}
 * @returns {string}
 */
function spliceParam(isFirst,jsonObj) {
    if(jsonObj == undefined){ return; }

    var url = isFirst ? '?' : '&';

    for(var key in jsonObj){
        url += key + '=' + jsonObj[key] + '&';
    }
    return url;
}

