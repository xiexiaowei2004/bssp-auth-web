$(function () {
    var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
    //var _jumpPage = baselocation + "/views/ems/bondInvBsc/";
    var seqNo = Utils.search("seqNo");
    /**
	 * 取消选择
     */
	$('#typeModalReback').click(function () {
        parent.layer.close(index);
    });
    /**
	 * 确认选择
     */
	$('#typeModalSave').click(function () {
		//合并方式
		var mergeType = $('#typeModalForm input[name=mergeType]:checked').val();
		var url;
		if(mergeType==1){//自动合并
            url = _server+"/inv/list/auto?seqNo="+seqNo;
        }else if(mergeType==2){//一对一合并
            url = _server+"/inv/list/sinGalMerge?seqNo="+seqNo;
        }
        if(mergeType==3){ //手动合并  1.报关单数据检查 2.生成报关单
            //报关数据检查
            $.ajax({
                url: _server+"/inv/list/declareCheck?seqNo="+seqNo+"&mergeType="+mergeType,
                type: 'get',
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success: function (response) {
                    if(response.code==1){
                        $.ajax({
                            url: _server+"/inv/list/generateBill?seqNo="+seqNo+"&mergeType="+mergeType,
                            type: 'get',
                            dataType: 'json',
                            xhrFields: {
                                withCredentials: true
                            },
                            crossDomain: true,
                            success: function (response) {
                                if (response.code == 1) {
                                    layer.confirm('成功生成报关单', {btn: ['确定', '取消']}, function () {
                                        parent.refreshGrid("img");
                                        parent.refreshGrid("exg");
                                        var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
                                        parent.layer.close(index);
                                    })
                                } else {
                                    parent.layer.msg("生成报关单失败", {
                                        shade: 0.3,
                                        time: 1500
                                    }, function () {
                                        parent.refreshGrid("img");
                                        var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
                                        parent.layer.close(index);
                                    });
                                }
                            },
                            error: function (response) {
                                layer.confirm('生成报关单失败', {btn: ['确定', '取消']}, function () {
                                    parent.refreshGrid("img");
                                    var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
                                    parent.layer.close(index);
                                })
                            }
                        });
                    }else {
                        layer.confirm(response.message, {btn: ['确定', '取消']}, function () {
                            parent.refreshGrid("img");
                            var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
                            parent.layer.close(index);
                        })
                         }
                },
                error: function (response) {
                    layer.confirm('报关数据检查失败', {btn: ['确定', '取消']}, function () {
                        parent.refreshGrid("img");
                        var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
                        parent.layer.close(index);
                    })
                }
            });
        }else{
            $.ajax({
                url: url,
                type: 'get',
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success: function (response) {
                    if(response.code==1){
                        //报关数据检查
                        $.ajax({
                            url: _server+"/inv/list/declareCheck?seqNo="+seqNo+"&mergeType="+mergeType,
                            type: 'get',
                            dataType: 'json',
                            xhrFields: {
                                withCredentials: true
                            },
                            crossDomain: true,
                            success: function (response) {
                                if(response.code==1){
                                    $.ajax({
                                        url: _server+"/inv/list/generateBill?seqNo="+seqNo+"&mergeType="+mergeType,
                                        type: 'get',
                                        dataType: 'json',
                                        xhrFields: {
                                            withCredentials: true
                                        },
                                        crossDomain: true,
                                        success: function (response) {
                                            if (response.code == 1) {
                                                layer.confirm('成功生成报关单', {btn: ['确定', '取消']}, function () {
                                                    parent.refreshGrid("img");
                                                    parent.refreshGrid("exg");
                                                    var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
                                                    parent.layer.close(index);
                                                })
                                            } else {
                                                layer.confirm('生成报关单失败', {btn: ['确定', '取消']}, function () {
                                                    parent.refreshGrid("img");
                                                    var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
                                                    parent.layer.close(index);
                                                })
                                            }
                                        },
                                        error: function (response) {
                                            layer.confirm('生成报关单失败', {btn: ['确定', '取消']}, function () {
                                                parent.refreshGrid("img");
                                                var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
                                                parent.layer.close(index);
                                            })
                                        }
                                    });
                                }else {
                                    layer.confirm(response.message, {btn: ['确定', '取消']}, function () {
                                        parent.refreshGrid("img");
                                        var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
                                        parent.layer.close(index);
                                    })
                                }
                            },
                            error: function (response) {
                                layer.confirm('报关数据检查失败', {btn: ['确定', '取消']}, function () {
                                    parent.refreshGrid("img");
                                    var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
                                    parent.layer.close(index);
                                })
                            }
                        });
                    }else{
                        layer.confirm('自动合并报关单失败', {btn: ['确定', '取消']}, function () {
                            parent.refreshGrid("img");
                            var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
                            parent.layer.close(index);
                        })
                    }
                },
                error: function (response) {
                    layer.confirm('合并类型设置失败', {btn: ['确定', '取消']}, function () {
                        parent.refreshGrid("img");
                        var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
                        parent.layer.close(index);
                    })
                }
            });
        }

    });
});