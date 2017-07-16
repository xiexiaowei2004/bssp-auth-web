<%@ page language="java" import="java.util.*" contentType="text/html; charset=utf-8"%>
<%@ include file="/WEB-INF/layouts/base.jsp"%>
<!DOCTYPE html>
<html><head>
    <title>宏桥保税业务综合服务平台 BSSP</title>
    <meta name="author" content="BSSP-simon.xie付出。">
    <meta name="keywords" content="BSSP">
    <meta name="description" content="BSSP">
    <link rel="shortcut icon" href="../../../static/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../../../static/common/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../../static/common/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="../../../static/admin/main/css/animate.css">
    <link rel="stylesheet" href="../../../static/admin/main/css/style.css">
</head>
<body class="fixed-sidebar full-height-layout gray-bg  pace-done">
   <div class="pace  pace-inactive"><div class="pace-progress" data-progress-text="100%" data-progress="99" style="width: 100%;">
    <div class="pace-progress-inner"></div>
</div>
    <div class="pace-activity"></div></div>

<div id="wrapper">
    <!--左侧导航开始-->
    <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="nav-close"><i class="fa fa-times-circle"></i>
        </div>
        <div class="slimScrollDiv" style="position: relative; width: auto; height: 100%;">
            <div class="sidebar-collapse" style="width: auto; height: 100%;overflow: auto;">
            <ul class="nav" id="side-menu">
                <li id="navHead" class="nav-header">
                    <div class="dropdown profile-element">
                            <!--<span>
                            <img id="picImg" src="#" alt="头像加载中..." class="img-circle  circle-size">
                             </span>-->
                        <a data-toggle="dropdown" class="dropdown-toggle" href="">
                                 <span class="text-muted text-xs block"><span class="fa fa-2x fa-user"></span><span id="userName"></span><b class="caret"></b></span>
                                
                        </a>
                        <ul class="dropdown-menu animated fadeInRight m-t-xs">
                            <li><a class="J_menuItem" href="../../../views/admin/system/system_user_info.jsp" data-index="1">个人资料</a>
                            </li>
                            <li class="divider"></li>
                            <li><a href="javascript:logout();">安全退出</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div><div class="slimScrollBar" style="background: rgb(0, 0, 0); width: 4px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 591px;"></div><div class="slimScrollRail" style="width: 4px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.9; z-index: 90; right: 1px;"></div></div>
    </nav>
    <!--左侧导航结束-->
    <!--右侧部分开始-->
    <div id="page-wrapper" class="gray-bg dashbard-1">
        <div class="row border-bottom">
            <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
                <div class="navbar-header">
                    <a class="navbar-minimalize minimalize-styl-2" href="#"><i class="fa fa-bars"></i> </a>

                        <!--<div class="form-group">
                            <h2>BSSP宏桥保税业务综合服务平台 </h2>
                        </div>-->

                </div>
                <!--<ul class="nav navbar-top-links navbar-right">
                    <li class="dropdown hidden-xs">
                        <a class="right-sidebar-toggle" aria-expanded="false"><i class="fa fa-tasks"></i> 主题</a>
                    </li>
                </ul>-->
                <span class="m-t-md m-r-sm text-info pull-right" id="time">2017年4月29日22时51分53秒</span>
            </nav>
        </div>
        <div class="row content-tabs">
            <button class="roll-nav roll-left J_tabLeft"><i class="fa fa-backward"></i>
            </button>
            <nav class="page-tabs J_menuTabs">
                <div class="page-tabs-content">
                    <a href="javascript:;" class="active J_menuTab" data-id="index.jsp">首页</a>
                </div>
            </nav>
            <button class="roll-nav roll-right J_tabRight"><i class="fa fa-forward"></i>
            </button>
            <div class="btn-group roll-nav roll-right">
                <button class="dropdown J_tabClose" data-toggle="dropdown">关闭操作<span class="caret"></span>

                </button>
                <ul role="menu" class="dropdown-menu dropdown-menu-right">
                    <li class="J_tabShowActive"><a>定位当前选项卡</a>
                    </li>
                    <li class="divider"></li>
                    <li class="J_tabCloseAll"><a>关闭全部选项卡</a>
                    </li>
                    <li class="J_tabCloseOther"><a>关闭其他选项卡</a>
                    </li>
                </ul>
            </div>
            <a href="javascript:logout()" class="roll-nav roll-right J_tabExit"><i class="fa fa fa-sign-out"></i> 退出</a>
        </div>
        <div class="row J_mainContent" id="content-main">
            <iframe class="J_iframe" name="iframe0" width="100%" height="100%" src="index.jsp" frameborder="0" data-id="index.jsp"></iframe>
        </div>
        <div class="footer">
            <div class="pull-right">© 2017<a href="http://www.powerbridge.com" target="_Blank"><label class="label label-success">BSSP</label></a>
            </div>
        </div>

    </div>
    <!--右侧部分结束-->

        <div class="slimScrollBar" style="background: rgb(0, 0, 0); width: 4px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 530px;"></div>
        <div class="slimScrollRail" style="width: 4px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.4; z-index: 90; right: 1px;"></div>
</div>

<!-- 全局js -->
<script src="../../../static/common/jquery/jquery-3.1.1.min.js"></script>
<script src="../../../static/common/js/common.js"></script>
<script src="main.js"></script>
<script src="../../../static/common/bootstrap/js/bootstrap.min.js"></script>
<script src="../../../static/admin/main/js/metisMenu/jquery.metisMenu.js"></script>
<script src="../../../static/admin/main/js/slimscroll/jquery.slimscroll.min.js"></script>
<!-- 自定义js -->
 	<%--<script src="../../../static/admin/main/js/contabs.js"></script>--%>
	<%--<script src="../../../static/admin/main/js/content.js"></script>--%>
	<%--<script src="../../../static/admin/main/js/hplus.js"></script>--%>
<!-- 第三方插件 -->
<script src="../../../static/admin/main/js/pace/pace.min.js"></script>

</body></html>