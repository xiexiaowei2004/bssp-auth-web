<%@ page language="java" import="java.util.*" contentType="text/html; charset=utf-8"%>
<%@ include file="/WEB-INF/layouts/base.jsp"%>
<!DOCTYPE html>
<html>
  <head>
    <title>BSSP宏桥保税业务综合服务平台</title>
      <meta charset="utf-8">
	<meta name="author" content="BSSP-simon.xie付出">
	<meta name="keywords" content="BSSP">
	<meta name="description" content="BSSP.">
	<link rel="shortcut icon" href="${ctx}/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="${ctxsta}/common/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="${ctxsta}/admin/login/css/style.css">
	<script> //var t1 = new Date().getTime(); </script>
</head>
<body>
   <div class="admin_head"></div>
      
    <div class="login_wrap">
      
      	<ul class="nav nav-tabs" role="tablist">
			<li role="presentation" class="active"><a href="#account" role="tab" data-toggle="tab">账号登录</a></li>
			<li role="presentation"><a href="#iccard" role="tab" data-toggle="tab">IC卡登录</a></li>
      	</ul>
         
         <div class="tab-content">
         
          <dl class="admin_login tab-pane active animated fadeInLeft" id="account" role="tabpanel">

			<dd class="user_icon">
				<input type="text" name="systemUser.loginName" placeholder="账号" class="login_txtbx"/>
			</dd>
			<dd class="pwd_icon">
				<input type="password" name="systemUser.loginPassword" placeholder="密码" class="login_txtbx" data-exponent="${publicKeyMap.exponent}" data-modulus="${publicKeyMap.modulus}" />
			</dd>
			<dd class="val_icon">
				<div class="checkcode">
					<input type="text" id="J_codetext" name="registerCode" placeholder="验证码" maxlength="5" class="login_txtbx">
					<img class="J_codeimg" id="kaptchaImage" src=""/>
				</div>
				<input type="button" title="点击换一张" class="ver_btn" onclick="$('#kaptchaImage').click()">
			</dd>
			<dd>
				<input type="button" value="登录" class="submit_btn"/>
			</dd>
      </dl>
      
         <dl class="admin_login tab-pane animated fadeInLeft" id="iccard" role="tabpanel">

			<dd class="user_icon">
				<input type="text" name="" placeholder="IC卡号" class="login_txtbx"/>
			</dd>
			<dd class="pwd_icon">
				<input type="password" name="" placeholder="密码" class="login_txtbx" />
			</dd>
			
			<dd>
				<input type="button" value="登录" class="ic_submit_btn"/>
			</dd>
      </dl>
   
   </div>
   
   </div>
<footer class="copyright">
   	<p>珠海宏桥高科技有限公司 版权所有 ©2017 </p>
<p>广东省珠海市唐家湾软件园路1号南方软件园D2-1层 邮政编码:519080 电话:86-756-3395666 传真:86-756-3395667</p>
   	
   </footer>
    <script src="${ctxsta}/common/jquery/jquery-3.1.1.min.js"></script>
    <script src="${ctxsta}/common/layer/layer.js"></script>
	<script src="${ctxsta}/common/security/security.js"></script>
	<script src="${ctxsta}/common/bootstrap/js/bootstrap.min.js"></script>
	<script src="${ctxsta}/common/js/common.js"></script>
	<script src="${ctxsta}/admin/login/js/login.js"></script>
</body>
</html>