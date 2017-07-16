$(function () {
    $.ajax({
        url: _server + "/system/main",
        // url:"data.json",
        type: 'get',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            initData(result);
        },
        error: function (result) {
        }
    });
})


function initData(result) {
    var user = result.data.systemUser;
    var menus = result.data.systemMenus;

    if (user.picImg != null) {
        $("#picImg").attr("src", user.picImg);
    } else {
        $("#picImg").attr("src", _server + "/upload/icon/icon.jpg");
    }
    $("#userName").html(user.userName);
    var menuArr = menus;
    var menuStr = "";
    if (menuArr.length > 0) {
        for (var i = 0; i < menuArr.length; i++) {
            if (menuArr[i].childMenuList.length > 0) {
                menuStr += "<li>";
                menuStr += "<a class='J_menuItem' href='" +baselocation+ menuArr[i].href + "'>";
                menuStr += "<i class='fa " + menuArr[i].icon + "'></i> ";
                menuStr += "<span class='nav-label'>" + menuArr[i].menuName + "</span> ";

                menuStr += "<span class='fa arrow'></span>";
                menuStr += "</a>";
                menuStr +=' <ul class="nav nav-second-level">';
                var childArr = menuArr[i].childMenuList;
                for (var j = 0; j < childArr.length; j++) {
                    menuStr += ("<li>");
                    menuStr += ("<a class='J_menuItem' href='" +baselocation+ childArr[j].href + "'>" + childArr[j].menuName + "</a>");
                    menuStr += ("</li>");
                }
                menuStr += "</ul>";
                menuStr += "</li>";

            } else {
                menuStr += "<li>";
                menuStr += "<a class='J_menuItem' href='" +baselocation+ menuArr[i].href + "'>";
                menuStr += "<i class='fa " + menuArr[i].icon + "'></i> ";
                menuStr += "<span class='nav-label'>" + menuArr[i].menuName + "</span> ";

                menuStr += "<span class='fa arrow'></span>";
                menuStr += "</a>";
                menuStr += "</li>";
            }
        }

    }
    $("#navHead").after(menuStr);

    //生成页面数据后再加载js
    dynamicLoading.js(baselocation+"/static/admin/main/js/contabs.js");
    dynamicLoading.js(baselocation+"/static/admin/main/js/content.js");
    dynamicLoading.js(baselocation+"/static/admin/main/js/hplus.js");

}


function logout(){
    var logoutUrl =_server+"/system/logout";

    $.ajax({
        url: logoutUrl,
        // url:"data.json",
        type: 'get',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            Utils.redirect(baselocation+"/system");
        },
        error: function (result) {
        }
    });
}


