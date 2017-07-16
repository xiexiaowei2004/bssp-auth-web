//服务器地址
var _serverAddress = _server+"/cop/copEnt/list";
//跳转页面
var _jumpPage = baselocation+"/views/cop/copEnt/";
//操作数组
var columns=[
    { title: "",field: "select",radio: true,width: 20,align: "center",valign: "middle"},
    { title: "企业海关代码",field: "tradeCode",align: "center",sortable: true },
    { title: "社会信用代码",field: "copGbCode",align: "center",sortable: true },
    { title: "企业名称",field: "entName",align: "left",sortable: true },
    { title: "有效期",field: "validDate",align: "center",sortable: true,formatter:function(value,row,index){
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
param.height = 350;
param.url = _serverAddress;

$(function(){
    //匹配查询或企业备案
    var findCop = Utils.search("findCop");
    isFind(findCop);
    //开始时间
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

function isFind(findCop) {
    if (findCop != '1'){
        $('#add,#edit,#remove').remove();
    }
}