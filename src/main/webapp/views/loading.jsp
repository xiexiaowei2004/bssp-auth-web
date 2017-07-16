<%@ page language="java" contentType="text/html; charset=utf-8" %>
<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
	<link rel="stylesheet" href="../static/common/bootstrap/css/bootstrap.min.css" />
	<link rel="stylesheet" href="../static/common/font-awesome/css/font-awesome.min.css" />
	<link rel="stylesheet" href="../static/admin/main/css/animate.css" />
	<link rel="stylesheet" href="../static/common/css/style.css" />
	<script src="../static/common/jquery/jquery-3.1.1.min.js"></script>
	<script src="../static/common/js/jquery.processing.plugin.js"></script>
	<script>
		$(document).ready(function () {
			var loadName = "页面加载中，请稍候......";
			$("#loadingDiv").progressDialog.showDialog(loadName, "#FFFFFF", "#000000");
		});
	</script>
</head>
<body>
	<div class="container animated fadeInRight" id="loadingDiv"></div>
</body>
</html>