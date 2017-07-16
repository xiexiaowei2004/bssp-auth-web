-- MySQL dump 10.13  Distrib 5.6.24, for Win32 (x86)
--
-- Host: localhost    Database: bssp
-- ------------------------------------------------------
-- Server version	5.5.9

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `system_menu`
--

DROP TABLE IF EXISTS `system_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `system_menu` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '权限编号',
  `PARENT_ID` int(9) DEFAULT NULL COMMENT '父级编号',
  `MENU_TYPE` int(1) DEFAULT NULL COMMENT '权限类型：1.菜单；2.功能；3.子功能；0.操作',
  `MENU_CODE` varchar(64) DEFAULT NULL COMMENT '权限代码',
  `MENU_NAME` varchar(64) DEFAULT NULL COMMENT '权限名称',
  `SORT` int(9) DEFAULT NULL COMMENT '权限排序',
  `HREF` varchar(255) DEFAULT NULL COMMENT '链接地址',
  `ICON` varchar(255) DEFAULT NULL COMMENT '图标名称',
  `STATUS` int(1) DEFAULT NULL COMMENT '状态：1.正常；0.冻结',
  `PERMISSION` varchar(255) DEFAULT NULL COMMENT '权限标识',
  `CREATE_TIME` datetime DEFAULT NULL COMMENT '创建时间',
  `CREATE_BY` varchar(64) DEFAULT '' COMMENT '创建者',
  `UPDATE_TIME` datetime DEFAULT NULL COMMENT '更新时间',
  `UPDATE_BY` varchar(64) DEFAULT NULL COMMENT '更新者',
  `REMARKS` varchar(255) DEFAULT NULL COMMENT '备注信息',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_menu`
--

LOCK TABLES `system_menu` WRITE;
/*!40000 ALTER TABLE `system_menu` DISABLE KEYS */;
INSERT INTO `system_menu` VALUES (1,0,1,'index','主页',10,'/system/main/index','fa-home',1,'system:view','2016-10-23 17:24:24',NULL,NULL,NULL,NULL),(2,0,1,'sysuser','系统管理',200,'','fa-user',1,'','2016-10-23 17:24:24',NULL,'2016-11-24 23:14:59','系统管理员',NULL),(3,2,2,'list','管理员列表',10,'/system/sysuser/list','',1,'','2016-10-23 17:24:24','系统管理员','2016-10-23 17:24:29','系统管理员',NULL),(4,3,0,'list_view','查看',1,'/system/sysuser/list/view',NULL,1,'sysuser:list:view','2016-10-23 17:46:12','系统管理员','2016-10-23 17:46:18','系统管理员',NULL),(5,3,0,'list_edit','编辑',2,'/system/sysuser/list/edit',NULL,1,'sysuser:list:edit','2016-10-23 17:47:14','系统管理员','2016-10-23 17:47:23','系统管理员',NULL),(6,3,0,'list_delete','删除',3,'/system/sysuser/list/delete',NULL,1,'sysuser:list:delete','2016-10-23 17:48:40','系统管理员','2016-10-23 17:48:47','系统管理员',NULL),(7,3,0,'list_add','添加',4,'/system/sysuser/list/add',NULL,1,'sysuser:list:add','2016-10-23 17:50:45','系统管理员','2016-10-23 17:50:52','系统管理员',NULL),(8,2,2,'info','个人信息',20,'/system/sysuser/info','',1,'','2016-10-23 17:24:24','系统管理员','2016-10-23 17:24:29','系统管理员',NULL),(9,8,0,'info_view','查看',1,'/system/sysuser/info/view',NULL,1,'sysuser:info:view','2016-10-23 17:46:12','系统管理员','2016-10-23 17:46:18','系统管理员',NULL),(10,8,0,'info_edit','编辑',2,'/system/sysuser/info/edit',NULL,1,'sysuser:info:edit','2016-10-23 17:47:14','系统管理员','2016-10-23 17:47:23','系统管理员',NULL),(11,2,2,'role','角色管理',30,'/system/sysrole/list','',1,'','2016-10-23 17:24:24','系统管理员','2016-10-23 17:24:29','系统管理员',NULL),(12,11,0,'role_view','查看',1,'/system/sysuser/role/view','',1,'sysuser:role:view','2016-10-23 17:46:12','系统管理员','2016-10-23 17:46:18','系统管理员',NULL),(13,11,0,'role_edit','编辑',2,'/system/sysuser/role/edit',NULL,1,'sysuser:role:edit','2016-10-23 17:47:14','系统管理员','2016-10-23 17:47:23','系统管理员',NULL),(14,11,0,'role_delete','删除',3,'/system/sysuser/role/delete','',1,'sysuser:role:delete','2016-10-23 17:46:12','系统管理员','2016-10-23 17:46:18','系统管理员',NULL),(15,11,0,'role_add','添加',4,'/system/sysuser/role/add',NULL,1,'sysuser:role:add','2016-10-23 17:47:14','系统管理员','2016-10-23 17:47:23','系统管理员',NULL),(17,2,2,'menu','菜单管理',35,'/system/sysmenu/list','',1,'','2016-10-25 17:25:29','系统管理员','2016-11-27 00:54:32','系统管理员',NULL),(18,73,0,'menu_view','查看',1,'/system/sysmenu/list/view',NULL,1,'sysuser:menu:view','2016-10-23 17:46:12','系统管理员','2016-10-23 17:46:18','系统管理员',NULL),(19,73,0,'menu_edit','编辑',2,'/system/sysmenu/list/edit',NULL,1,'sysuser:menu:edit','2016-10-23 17:47:14','系统管理员','2016-10-23 17:47:23','系统管理员',NULL),(20,73,0,'menu_delete','删除',3,'/system/sysmenu/list/delete',NULL,1,'sysuser:menu:delete','2016-10-23 17:48:40','系统管理员','2016-10-23 17:48:47','系统管理员',NULL),(21,73,0,'menu_add','添加',4,'/system/sysmenu/list/add',NULL,1,'sysuser:menu:add','2016-10-23 17:50:45','系统管理员','2016-10-23 17:50:52','系统管理员',NULL),(22,0,1,'manage','系统监控',700,'','fa-desktop',1,'','2016-10-23 17:24:24',NULL,'2016-11-24 23:15:25','系统管理员',NULL),(23,22,2,NULL,'连接池监视',40,'/druid','',1,'','2016-11-07 01:16:13','系统管理员','2016-11-07 01:16:20','系统管理员',NULL);
/*!40000 ALTER TABLE `system_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_role`
--

DROP TABLE IF EXISTS `system_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `system_role` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '角色编号',
  `ROLE_NAME` varchar(64) CHARACTER SET utf8 DEFAULT NULL COMMENT '角色名称',
  `IS_SYSTEM` int(1) DEFAULT '1' COMMENT '系统数据：1.是，只有超级管理员能修改；0.否，拥有角色修改人员的权限能都修改',
  `STATUS` int(1) DEFAULT '1' COMMENT '状态：1.正常；0.冻结',
  `CREATE_TIME` datetime DEFAULT NULL COMMENT '创建时间',
  `CREATE_BY` varchar(64) DEFAULT NULL COMMENT '创建者',
  `UPDATE_TIME` datetime DEFAULT NULL COMMENT '更新时间',
  `UPDATE_BY` varchar(64) DEFAULT NULL COMMENT '更新者',
  `REMARKS` varchar(255) DEFAULT NULL COMMENT '备注信息',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_role`
--

LOCK TABLES `system_role` WRITE;
/*!40000 ALTER TABLE `system_role` DISABLE KEYS */;
INSERT INTO `system_role` VALUES (1,'超级管理员',1,1,'2016-10-23 14:26:47','猫宁管理员','2016-11-26 04:08:24','系统管理员','系统管理员，拥有最高管理权限'),(2,'订单管理员',1,1,'2016-10-25 03:26:49','猫宁管理员','2016-11-26 04:45:43','系统管理员','订单管理员，负责处理订单'),(3,'评论管理员',1,1,'2016-10-27 21:36:42','猫宁管理员','2016-11-26 04:10:16','系统管理员','评论管理员，负责处理评论');
/*!40000 ALTER TABLE `system_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_role_menu`
--

DROP TABLE IF EXISTS `system_role_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `system_role_menu` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '角色权限编号',
  `ROLE_ID` int(11) DEFAULT NULL COMMENT '角色编号',
  `MENU_ID` int(11) DEFAULT NULL COMMENT '权限编号',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_role_menu`
--

LOCK TABLES `system_role_menu` WRITE;
/*!40000 ALTER TABLE `system_role_menu` DISABLE KEYS */;
INSERT INTO `system_role_menu` VALUES (27,1,1),(28,1,2),(29,1,3),(30,1,4),(31,1,5),(32,1,6),(33,1,7),(34,1,8),(35,1,9),(36,1,10),(37,1,11),(38,1,12),(39,1,13),(40,1,14),(41,1,15),(42,1,73),(43,1,18),(44,1,19),(45,1,20),(46,1,21),(47,1,65),(48,1,71),(59,3,1),(60,3,2),(61,3,3),(62,3,4),(63,3,5),(64,3,6),(65,3,7),(66,3,8),(67,3,9),(68,3,10),(69,2,1),(70,2,2),(71,2,8),(72,2,9),(73,2,10),(74,2,65),(75,2,71);
/*!40000 ALTER TABLE `system_role_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_user`
--

DROP TABLE IF EXISTS `system_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `system_user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `LOGIN_NAME` varchar(20) DEFAULT '' COMMENT '登录名',
  `LOGIN_PASSWORD` varchar(32) DEFAULT '' COMMENT '用户密码',
  `USER_NAME` varchar(50) DEFAULT NULL COMMENT '昵称',
  `REAL_NAME` varchar(64) DEFAULT NULL COMMENT '真实姓名',
  `SEX` int(1) DEFAULT '0' COMMENT '性别：0.保密；1.男； 2.女',
  `AGE` int(3) DEFAULT '0' COMMENT '年龄',
  `PIC_IMG` varchar(255) DEFAULT NULL COMMENT '用户头像',
  `STATUS` int(1) DEFAULT '1' COMMENT '状态：0.冻结；1.正常；2.删除',
  `LAST_LOGIN_TIME` timestamp NULL DEFAULT NULL COMMENT '最后登录时间',
  `LAST_LOGIN_IP` varchar(20) DEFAULT NULL COMMENT '最后登录IP',
  `EMAIL` varchar(50) DEFAULT NULL COMMENT '电子邮箱',
  `TELEPHONE` varchar(11) DEFAULT NULL COMMENT '手机号码',
  `CREATE_TIME` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  `CREATE_BY` varchar(64) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '创建者',
  `UPDATE_TIME` datetime DEFAULT NULL COMMENT '更新时间',
  `UPDATE_BY` varchar(64) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_user`
--

LOCK TABLES `system_user` WRITE;
/*!40000 ALTER TABLE `system_user` DISABLE KEYS */;
INSERT INTO `system_user` VALUES (1,'admin','7439e62f139ba46b14dbc038005fab1d','系统管理员','梯子',1,NULL,NULL,1,'2016-11-26 16:41:25','192.168.40.1','13051210283@163.com','17789542654','2016-10-27 07:11:43','simon.xie','2016-11-24 00:18:04','梯子'),(2,'system','7439e62f139ba46b14dbc038005fab1d','业务管理','小红',2,NULL,NULL,1,'2016-11-25 20:10:58','192.168.40.1','18251210283@163.com','18685421456','2016-10-27 07:11:43','鞋子','2016-11-26 04:09:45','系统管理员'),(3,'yw','7439e62f139ba46b14dbc038005fab1d','小明','小明',0,NULL,NULL,1,'2016-11-25 20:45:55','192.168.40.1','13053240283@163.com','15344542654','2016-11-23 16:13:47','梯子','2016-11-26 04:10:02','系统管理员'),(4,'admin2','7439e62f139ba46b14dbc038005fab1d','系统管理员','高的',2,0,NULL,1,NULL,NULL,'13051210283@163.com','18685421456','2016-11-24 01:26:40','系统管理员','2016-11-27 00:43:01',NULL);
/*!40000 ALTER TABLE `system_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_user_login_log`
--

DROP TABLE IF EXISTS `system_user_login_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `system_user_login_log` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '登录日志ID',
  `LOGIN_TIME` timestamp NULL DEFAULT NULL COMMENT '登录时间',
  `USER_IP` varchar(20) DEFAULT NULL COMMENT '登录IP',
  `USER_ID` int(11) DEFAULT NULL COMMENT '用户ID',
  `OPERATING_SYSTEM` varchar(50) DEFAULT NULL COMMENT '操作系统',
  `BROWSER` varchar(50) DEFAULT NULL COMMENT '浏览器',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_user_login_log`
--

LOCK TABLES `system_user_login_log` WRITE;
/*!40000 ALTER TABLE `system_user_login_log` DISABLE KEYS */;
INSERT INTO `system_user_login_log` VALUES (1,'2016-11-22 22:54:08','192.168.27.53',1,'WINDOWS_10','CHROME'),(2,'2016-11-22 22:54:26','192.168.27.53',1,'WINDOWS_10','CHROME'),(3,'2016-11-22 22:56:07','192.168.27.53',1,'WINDOWS_10','CHROME'),(4,'2016-11-22 22:57:18','192.168.27.53',1,'WINDOWS_10','CHROME'),(5,'2016-11-22 22:59:26','192.168.27.53',1,'WINDOWS_10','CHROME'),(6,'2016-11-22 23:03:45','192.168.27.53',1,'WINDOWS_10','CHROME'),(7,'2016-11-22 23:05:37','192.168.27.53',1,'WINDOWS_10','CHROME'),(8,'2016-11-22 23:11:59','192.168.27.53',1,'WINDOWS_10','CHROME'),(9,'2016-11-22 23:15:09','192.168.27.53',1,'WINDOWS_10','CHROME'),(10,'2016-11-22 23:25:45','192.168.27.53',1,'WINDOWS_10','CHROME'),(11,'2016-11-22 23:44:25','192.168.27.53',1,'WINDOWS_10','CHROME'),(12,'2016-11-23 01:07:13','192.168.27.53',1,'WINDOWS_10','CHROME'),(13,'2016-11-23 15:26:08','192.168.27.53',1,'WINDOWS_10','CHROME'),(14,'2016-11-23 22:51:03','192.168.27.53',1,'WINDOWS_10','CHROME'),(15,'2016-11-23 23:09:35','192.168.27.53',1,'WINDOWS_10','CHROME'),(16,'2016-11-25 20:10:59','192.168.40.1',2,'WINDOWS_10','CHROME'),(17,'2016-11-25 20:11:53','192.168.40.1',3,'WINDOWS_10','CHROME'),(18,'2016-11-25 20:42:11','192.168.40.1',1,'WINDOWS_10','CHROME'),(19,'2016-11-25 20:43:41','192.168.40.1',3,'WINDOWS_10','CHROME'),(20,'2016-11-25 20:45:28','192.168.40.1',1,'WINDOWS_10','CHROME'),(21,'2016-11-25 20:45:55','192.168.40.1',3,'WINDOWS_10','CHROME'),(22,'2016-11-26 16:41:25','192.168.40.1',1,'WINDOWS_10','CHROME');
/*!40000 ALTER TABLE `system_user_login_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_user_role`
--

DROP TABLE IF EXISTS `system_user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `system_user_role` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户角色编号',
  `ROLE_ID` int(11) DEFAULT NULL COMMENT '角色编号',
  `USER_ID` int(11) DEFAULT NULL COMMENT '用户编号',
  `CREATE_TIME` datetime DEFAULT NULL COMMENT '创建时间',
  `CREATE_BY` varchar(64) DEFAULT NULL COMMENT '创建者',
  PRIMARY KEY (`ID`),
  KEY `ACCOUNT_ID` (`USER_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=200 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_user_role`
--

LOCK TABLES `system_user_role` WRITE;
/*!40000 ALTER TABLE `system_user_role` DISABLE KEYS */;
INSERT INTO `system_user_role` VALUES (192,1,1,'2016-11-24 00:18:04','梯子'),(196,2,4,'2016-11-24 09:26:40','系统管理员'),(197,2,2,'2016-11-26 04:09:45','系统管理员'),(198,2,3,'2016-11-26 04:10:02','系统管理员'),(199,3,3,'2016-11-26 04:10:02','系统管理员');
/*!40000 ALTER TABLE `system_user_role` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-11-27  9:16:33
