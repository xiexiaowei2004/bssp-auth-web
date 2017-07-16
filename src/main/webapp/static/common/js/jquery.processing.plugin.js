(function($) {
	$.fn.progressDialog = function() {

	};
    //显示进度条
	$.fn.progressDialog.showDialog = function(text,bgColor,fontColor) {
		text = text || "加载中,请稍等..."
		createElement(text, bgColor, fontColor);
		setPosition();
		waterfall.appendTo("body");
		$(window).bind('resize', function() {
			setPosition();
		});
	}
    //隐藏进度条
	$.fn.progressDialog.hideDialog = function(text) {
		waterfall.remove();
	}
    //创建遮罩层.text:文本内容；bgColor:背景色；fontColor:字体颜色
	function createElement(text, bgColor, fontColor) {
	    if (bgColor == "" || bgColor == null || bgColor == undefined)
	        bgColor = "#000000";
	    if (fontColor == "" || fontColor == null || fontColor == undefined)
	        fontColor = "#FFFFFF";
	    if (!waterfall) {
			waterfall = $(document.createElement("div"));
			waterfall.attr("id", "waterfall");
			waterfall.css( {
				"height" : "100%",
				"width" : "100%",
				"filter" : "alpha(opacity = 50)",
				"-moz-opacity" : "0.5",
				"opacity" : "0.5",
				"background-color": bgColor,
				"position" : "absolute",
				"left" : "0px",
				"top" : "0px"
			});
		}
		if (!loadDiv) {
			loadDiv = document.createElement("div");
		}
		$(loadDiv).appendTo(waterfall);
		
		var content = " <div style='width:" + width + "px; height:" + Height + "px;'><div style='width:100%; height:50px; line-height:51px;padding-left:15px;font-weight:bolder;font-size:18px; color:" + fontColor + ";'>" + text + "</div><div align='center'></div></div>";
		$(loadDiv).html(content);
	}
    //设置位置
	function setPosition() {
		var leftOffset = ($(document).width() - width) / 2;
		var topOffset = ($(document).height() - Height) / 2;
		$(loadDiv).css( {
			"position" : "absolute",
			"height" : Height + "px",
			"width" : width + "px",
			"left" : leftOffset + "px",
			"top" : topOffset + "px"
		});
	}

	var waterfall;
	var loadDiv;
	var width = 290;
	var Height = 60;
})(jQuery);