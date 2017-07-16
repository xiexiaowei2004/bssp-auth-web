package com.bssp.controller.system;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.bssp.common.constants.MessageConstants;
import com.google.gson.Gson;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.bssp.common.dto.AjaxResult;
import com.bssp.common.security.SystemAuthorizingUser;
import com.bssp.common.util.MD5Utils;
import com.bssp.common.util.SingletonLoginUtils;
import com.bssp.common.util.UploadFileUtils;
import com.bssp.common.util.toolbox.WebUtil;
import com.bssp.controller.BaseController;
import com.bssp.entity.system.QueryUser;
import com.bssp.entity.system.SystemRole;
import com.bssp.entity.system.SystemUser;
import com.bssp.entity.system.SystemUserLoginLog;
import com.bssp.entity.system.SystemUserRole;
import com.bssp.service.system.ISystemRoleService;
import com.bssp.service.system.ISystemUserLoginLogService;
import com.bssp.service.system.ISystemUserRoleService;
import com.bssp.service.system.ISystemUserService;

/**
* 项目名称：bssp Maven Webapp
* 类名称：SystemUserController   
* 类描述：系统管理员控制器   
* 创建人：
* 创建时间：2017年4月27日 下午10:12:17
* @version
 */
@Controller
@RequestMapping("/system/sysuser")
public class SystemUserController extends BaseController {

	/** 系统管理员列表 */
	private static final String SYSTEM_USER_LIST = getViewPath("admin/system/system_user_list");
	/** 用户个人资料 */
	private static final String SYSTEM_USER_MESSAGE = getViewPath("admin/system/system_user_message");
	/** 用户登录日志 */
	private static final String USER_LOGIN_LOG = getViewPath("admin/user/user_login_log");
	/** 管理员分类查看 */
	private static final String SYSTEM_USER_ROLE = getViewPath("admin/system/system_user_role");
	/** 创建或者修改用户界面 */
	private static final String SYSTEM_USER_ADDUSER = getViewPath("admin/system/system_user_add");
	/** 系统管理员信息界面 */
	private static final String SYSTEM_USER_INFO = getViewPath("admin/system/system_user_info");
	/** 系统管理员头像界面 */
	private static final String SYSTEM_USER_AVATAR = getViewPath("admin/system/system_user_avatar");

	private static final  Gson gson = new Gson();

	@Autowired
	private ISystemUserService systemUserService;
	@Autowired
	private ISystemUserLoginLogService systemUserLoginLogService;
	@Autowired
	private ISystemRoleService systemRoleService;
	@Autowired
	private ISystemUserRoleService systemUserRoleService;


	@InitBinder("systemUser")
	public void initBinderSystemUser(WebDataBinder binder) {
		binder.setFieldDefaultPrefix("systemUser.");
	}

	@InitBinder("queryUser")
	public void initQueryUser(WebDataBinder dinder) {
		dinder.setFieldDefaultPrefix("queryUser.");
	}
	
	/**
	 * GET 管理员列表
	 * @param queryUser
	 * @return
	 */
	//@RequiresPermissions("sysuser:list:view")
	@RequestMapping(value = "/list")
	@ResponseBody
	public String list(Model model, @ModelAttribute("queryUser") QueryUser queryUser) {
		Map<String, Object> json = new HashMap<String,Object>();
		Map<String, Object> data = new HashMap<String,Object>();
		int sysUserNumber = systemUserService.selectAllSystemUserNumber();
		//model.addAttribute("sysUserNumber", sysUserNumber);
		List<SystemUser> systemUsers = systemUserService.selectAllSystemUser(queryUser);
		//model.addAttribute("systemUsers", systemUsers);
		List<SystemRole> systemRoles = systemRoleService.selectRoleAndNumber();
		//model.addAttribute("systemRoles", systemRoles);
		data.put("sysUserNumber",sysUserNumber);// 用户总数量
		data.put("systemUsers",systemUsers);// 用户列表
		data.put("systemRoles",systemUsers);// 权限列表
		json=this.transJson("1","成功",data);
		String jsonStr = gson.toJson(json);
		return  jsonStr;
	}
	
	/**
	 * GET 个人资料
	 * @param userId 用户编号
	 * @return
	 */
	//@RequiresPermissions("sysuser:list:view")
	@RequestMapping(value = "/list/{userId}/detail", method = RequestMethod.GET)
	@ResponseBody
	public String detail(Model model, @PathVariable Long userId){
		Map<String, Object> json = new HashMap<String,Object>();
		Map<String, Object> data = new HashMap<String,Object>();
		SystemUser user = systemUserService.selectById(userId);
		model.addAttribute("user", user);//用户信息
		List<SystemUserRole> systemUserRoles = systemUserRoleService.selectRoleListByAccountId(userId);
		StringBuffer userRole = new StringBuffer();
		for(SystemUserRole systemUserRole : systemUserRoles){
			userRole.append(systemUserRole.getRoleName());
			userRole.append("&nbsp");
		}
		data.put("userRole",userRole);//用户权限
		json=this.transJson("1","成功",data);
		String jsonStr = gson.toJson(json);
		return  jsonStr;
	}
	
	/**
	 * Get 用户登录日志
	 * @param accountId
	 * @return
	 */
	//@RequiresPermissions("sysuser:list:view")
	@RequestMapping(value = "/list/{accountId}/log", method = RequestMethod.GET)
	@ResponseBody
	public String userLog(Model model, @PathVariable Long accountId){
		Map<String, Object> json = new HashMap<String,Object>();
		Map<String, Object> data = new HashMap<String,Object>();
		List<SystemUserLoginLog> systemUserLoginLogList = systemUserLoginLogService.selectUserLoginLog(accountId);
		data.put("systemUserLoginLogList",systemUserLoginLogList);
		json=this.transJson("1","成功",data);
		String jsonStr = gson.toJson(json);
		return  jsonStr;
	}
	
	/**
	 * POST 启用/禁止用户
	 * @return
	 */
	//@RequiresPermissions("sysuser:list:edit")
	@RequestMapping(value = "/list/audit", method = RequestMethod.POST)
	@ResponseBody
	public AjaxResult audit() {
		Long accountId = Long.valueOf(getParameter("accountId"));
		Integer status = Integer.valueOf(getParameter("status"));
		systemUserService.updateUserStatus(accountId, status);
		return result(MessageConstants.BSSP_STATUS_SUCCESS);
	}
	
	/**
	 * DELETE 删除用户
	 * @return
	 */
	//@RequiresPermissions("sysuser:list:delete")
	@RequestMapping(value = "/list/{accountId}/delete", method = RequestMethod.DELETE)
	@ResponseBody
	public AjaxResult delete(@PathVariable Long accountId) {
		systemUserService.deleteSysUser(accountId);
		return result(MessageConstants.BSSP_STATUS_SUCCESS);
	}
	
	/**
	 * GET 角色分类下管理员列表
	 * @param roleId
	 * @return
	 */
	//@RequiresPermissions("sysuser:list:view")
	@RequestMapping(value = "/list/{roleId}/role", method = RequestMethod.GET)
	@ResponseBody
	public String listrole(Model model, @PathVariable Long roleId) {
		Map<String, Object> json = new HashMap<String,Object>();
		Map<String, Object> data = new HashMap<String,Object>();
		List<SystemUser> systemUsers = systemUserService.selectSysUserByRoleId(roleId);
		data.put("systemUsers",systemUsers);
		json=this.transJson("1","成功获取数据",data);
		String jsonStr = gson.toJson(json);
		return  jsonStr;
	}
	
	/**
	 * GET 修改用户页面
	 * @return
	 */
	//@RequiresPermissions("sysuser:list:edit")
	@RequestMapping(value = "/list/{accountId}/edit", method = RequestMethod.GET)
	@ResponseBody
	public String edit(Model model, @PathVariable Long accountId){
		Map<String, Object> json = new HashMap<String,Object>();
		Map<String, Object> data = new HashMap<String,Object>();
		SystemUser systemUser = systemUserService.selectById(Long.valueOf(accountId));
		//model.addAttribute("systemUser", systemUser);
		List<SystemRole> systemRoles = systemRoleService.selectRoleList();
		//model.addAttribute("systemRoles", systemRoles);
		List<SystemUserRole> systemRoleList = systemUserRoleService.selectRoleListByAccountId(accountId);
		//model.addAttribute("systemRoleList", systemRoleList);
		data.put("systemUser",systemUser);//用户信息
		data.put("systemRoles",systemRoles);//所有角色
		data.put("systemRoleList",systemRoleList);//分配角色
		json=this.transJson("1","成功",data);
		String jsonStr = gson.toJson(json);
		return  jsonStr;
	}
	
	/**
	 * GET 创建用户页面
	 * @return
	 */
	//@RequiresPermissions("sysuser:list:add")
	@RequestMapping(value = "/list/add", method = RequestMethod.GET)
	@ResponseBody
	public String add(Model model) {
		Map<String, Object> json = new HashMap<String,Object>();
		Map<String, Object> data = new HashMap<String,Object>();
		List<SystemRole> systemRoles = systemRoleService.selectRoleList();
		data.put("systemRoles",systemRoles);
		json=this.transJson("1","创建用户成功",data);
		String jsonStr = gson.toJson(json);
		return  jsonStr;
	}
	
	/**
	 * POST 创建或修改用户
	 * @return
	 */
	//@RequiresPermissions({"sysuser:list:add","sysuser:list:edit"})
	@RequestMapping(value = "/list/save", method = RequestMethod.POST)
	@ResponseBody
	public AjaxResult update(@ModelAttribute("systemUser") SystemUser systemUser){
		String[] roleIds = getParameterValues("roleId");
		if(!WebUtil.isEmail(systemUser.getEmail())){
			return result(MessageConstants.BSSP_STATUS_EMAIL_INPUT_ERROR);
		}
		if(!WebUtil.isTelephone(systemUser.getTelephone())){
			return result(MessageConstants.BSSP_STATUS_PHONE_INPUT_ERROR);
		}
		if(systemUser.getId() == null){
			if(systemUserService.checkLoginName(systemUser.getLoginName())){
				return result(MessageConstants.BSSP_STATUS_USER_REDUPLICATED);
			}
			systemUserService.insertSystemUser(systemUser, roleIds);//创建用户及插入角色记录
			return result(MessageConstants.BSSP_STATUS_USER_CREATE_SUCCESS);
		}else{
			systemUserService.updateUserInfoBySystem(systemUser, roleIds);//更新用户及角色记录
			return result(MessageConstants.BSSP_STATUS_USER_UPDATE_SUCCESS);
		}
	}
	
	/**
	 * GET 管理员个人信息界面
	 * @return
	 */
	//@RequiresPermissions("sysuser:info:view")
	@RequestMapping(value = "/info", method = RequestMethod.GET)
	@ResponseBody
	public String view(Model model) {
		String jsonStr="";
		Map<String, Object> json = new HashMap<String,Object>();
		Map<String, Object> data = new HashMap<String,Object>();
		SystemAuthorizingUser sysUser = SingletonLoginUtils.getSystemUser();
		if (sysUser != null) {
			SystemUser systemUser = systemUserService.selectByLoginName(sysUser.getLoginName());
			//model.addAttribute("systemUser", systemUser);// 用户信息

			List<SystemUserLoginLog> systemUserLoginLogList = systemUserLoginLogService.selectUserLoginLog(systemUser.getId());
			//model.addAttribute("systemUserLoginLogList", systemUserLoginLogList);

			List<SystemUserRole> systemUserRoles = systemUserRoleService.selectRoleListByAccountId(systemUser.getId());
			StringBuffer userRole = new StringBuffer();
			for (SystemUserRole systemUserRole : systemUserRoles) {
				userRole.append(systemUserRole.getRoleName());
				userRole.append("&nbsp");
			}
			//model.addAttribute("userRole", userRole);
			data.put("systemUser",systemUser);// 用户信息
			data.put("systemUserLoginLogList",systemUserLoginLogList);// 用户日志
			data.put("userRole",userRole);// 用户权限
			json=this.transJson("1","成功获取数据",data);
			jsonStr = gson.toJson(json);
		}

		return  jsonStr;
	}
	
	
	/**
	 * POST 更新管理员信息
	 * @param systemUser
	 * @return
	 */
	//@RequiresPermissions("sysuser:info:edit")
	@RequestMapping(value = "/info/edit", method = RequestMethod.POST)
	@ResponseBody
	public AjaxResult edit(@ModelAttribute("systemUser") SystemUser systemUser){
		SystemAuthorizingUser sysUser = SingletonLoginUtils.getSystemUser();
		if (sysUser != null) {
			systemUser.setId(sysUser.getUserId());
			systemUserService.updateUserInfo(systemUser);
			return result(MessageConstants.BSSP_STATUS_SUCCESS);
		}else{
			return result(MessageConstants.BSSP_STATUS_USER_OVERTIME);
		}
	}
	
	/**
	 * 修改密码
	 * @param request
	 * @return
	 */
	@RequiresPermissions("sysuser:info:edit")
	@RequestMapping(value = "/info/edit/psw", method = RequestMethod.POST)
	@ResponseBody
	public AjaxResult editPwd(HttpServletRequest request){
		SystemAuthorizingUser sysUser = SingletonLoginUtils.getSystemUser();
		if (sysUser != null) {
			SystemUser systemUser = systemUserService.selectByLoginName(sysUser.getLoginName());
			// 原密码
			String nowPassword = request.getParameter("nowPassword") == null ? ""
					: request.getParameter("nowPassword");
			// 新密码
			String newPassword = request.getParameter("newPassword") == null ? ""
					: request.getParameter("newPassword");
			// 确认密码
			String confirmPwd = request.getParameter("confirmPwd") == null ? ""
					: request.getParameter("confirmPwd");
			if(!MD5Utils.getMD5(nowPassword).equals(systemUser.getLoginPassword())){
				return result(MessageConstants.BSSP_STATUS_PASSWORD_EXIST_ERROR);
			}
			if(!WebUtil.isPassword(newPassword)){
				return result(MessageConstants.BSSP_STATUS_PASSWORD_INPUT_ERROR);
			}
			if(!newPassword.equals(confirmPwd)){
				return result(MessageConstants.BSSP_STATUS_PASSWORD_UPDATE_ERROR);
			}
			systemUserService.updateUserPws(systemUser.getId(), newPassword);
			return result(MessageConstants.BSSP_STATUS_PASSWORD_UPDATE_SUCCESS);
		}else{
			return result(MessageConstants.BSSP_STATUS_USER_OVERTIME);
		}
	}
	
	/**
	 * 设置头像页面
	 */
	//@RequestMapping(value = "/upload", method = RequestMethod.GET)
	public String setAvatar() {
		return SYSTEM_USER_AVATAR;
	}
    @RequestMapping(value = "/upload",method = RequestMethod.POST, produces="application/json;charset=utf-8")  
	@ResponseBody
	public Map<String, Object> uploadHeadPortrait(MultipartFile avatar_file,String avatar_src,String avatar_data, HttpServletRequest request){
		Map<String, Object> json = new HashMap<String, Object>();
		if (!avatar_file.isEmpty()) {
			try{
		        //判断文件的MIMEtype
		        String type = avatar_file.getContentType();
		        if(type == null || !type.toLowerCase().startsWith("image/")){
					json = this.setJson(MessageConstants.BSSP_STATUS_IMAGE_FILE_ERROR, null);
		        	return  json;
		        }
				//头像存放文件
				String dir = "icon";
				Map<String, Object> returnMap = UploadFileUtils.Upload(request,avatar_file,avatar_data,dir);
				//返回的布尔型参数的值为true，如果字符串参数不为null，是相等的，忽略大小写字符串“true”。
				if (Boolean.parseBoolean(returnMap.get("flag").toString()) == true) {
                    SystemAuthorizingUser sysUser = SingletonLoginUtils.getSystemUser();
    				if (sysUser != null) {
						SystemUser systemUser = systemUserService.selectByLoginName(sysUser.getLoginName());
						systemUser.setPicImg(returnMap.get("savaPath").toString());
						systemUserService.insertOrUpdate(systemUser);
					}
					json = this.setJson(MessageConstants.BSSP_STATUS_IMAGE_UPDATE_SUCCESS, returnMap.get("savaPath").toString());
					return json;
				} 
			}catch(Exception e){
				logger.error("ImageUploadController.uploadHeadPortrait", e);
				json = this.setJson(MessageConstants.BSSP_STATUS_IMAGE_UPDATE_FAIL, null);
				return json;
			}
		}
		json = this.setJson(MessageConstants.BSSP_STATUS_IMAGE_FILE_ERROR, null);
    	return  json;
	}

}