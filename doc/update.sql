update  system_menu  set href = '/views/admin/system/system_user_info.jsp' where menu_code='info';
update  system_menu  set href = '/views/admin/system/system_user_list.jsp' where menu_code='list';
update  system_menu  set href = '/views/admin/system/system_role_list.jsp' where menu_code='role';
update  system_menu  set href = '/views/admin/system/system_menu_list.jsp' where menu_code='menu';


update  system_menu  set href = '/views/admin/main/index.jsp' where menu_code='index';


/* 修复页面已经菜单点击时404问题.*/
update system_menu set href = '' where href is null;


/*用户类型,0平台用户,1企业用户*/
alter table system_user add USER_TYPE int  COMMENT '用户类型:0平台用户,1企业用户';
/*企业代码,对应企业备案模块企业 企业海关代码*/
alter table system_user add TRADE_CODE varchar(10) COMMENT '企业代码:对应企业备案模块企业 企业海关代码';
/*企业名称,对应企业备案模块企业 企业名称*/
alter table system_user add ENT_NAME varchar(128) COMMENT '企业名称:对应企业备案模块企业 企业名称';

/*角色类型,0平台角色,1企业角色*/
alter table system_role add ROLE_TYPE int COMMENT '角色类型:0平台角色,1企业角色';
/*企业代码,对应企业备案模块企业 企业海关代码*/
alter table system_role add TRADE_CODE varchar(10) COMMENT '企业代码:对应企业备案模块企业 企业海关代码';


update system_user set USER_TYPE= 0 where USER_TYPE is null;