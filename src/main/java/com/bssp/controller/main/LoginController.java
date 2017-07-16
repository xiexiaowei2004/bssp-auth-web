package com.bssp.controller.main;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.bssp.common.constants.MessageConstants;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.DisabledAccountException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import com.bssp.common.dto.AjaxResult;
import com.bssp.common.util.MD5Utils;
import com.bssp.common.util.RSAUtils;
import com.bssp.common.util.ServletUtils;
import com.bssp.common.util.SingletonLoginUtils;
import com.bssp.controller.BaseController;
import com.bssp.entity.system.SystemUser;
import com.bssp.service.system.ISystemUserService;

/**
 * 
*    
* 项目名称：bssp Maven Webapp
* 类名称：LoginController   
* 类描述：后台管理员登录表示层   
* 创建人：simon.xie
* 创建时间：2017年4月27日 下午10:12:17
* 修改人：simon.xie
* 修改时间：2017年4月27日 下午10:12:17
* 修改备注：mybatis-plus整合完毕   
* @version    
*
 */
@Controller
@RequestMapping("/system")
@CrossOrigin
public class LoginController extends BaseController{
	
	/** 后台管理登录页面 */
	private static final String ADMIN_LOGIN = getViewPath("admin/login/admin_login");

	@Autowired
	private ISystemUserService systemUserService;

	@InitBinder({ "systemUser" })
	public void initBinderSystemUser(WebDataBinder binder) {
		binder.setFieldDefaultPrefix("systemUser.");
	}
	
	/**
	 * GET 登录
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(method = RequestMethod.GET)
	public String login(HttpServletRequest request, Model model) {
		// 将公钥的 modulus 和 exponent 传给页面
		Map<String, Object> publicKeyMap = RSAUtils.getPublicKeyMap();
		model.addAttribute("publicKeyMap", publicKeyMap);
		return ADMIN_LOGIN;
	}
	
	/**
	 * POST 登录
	 * @param systemUser
	 * @return
	 */
	@RequestMapping(value = "/login", method = {RequestMethod.GET,RequestMethod.POST})
	@ResponseBody
	public AjaxResult login(HttpServletRequest request,@ModelAttribute("systemUser") SystemUser systemUser) {
		if (!SingletonLoginUtils.validate(request)) {
			return result(MessageConstants.BSSP_STATUS_VERIFY_WRONG);
		}
		// 服务器端，使用RSAUtils工具类对密文进行解密
		String passWord = RSAUtils.decryptStringByJs(systemUser.getLoginPassword());
//		String passWord = systemUser.getLoginPassword();
		systemUser.setLoginPassword(MD5Utils.getMD5(passWord));
		System.out.println("password:"+passWord);
		System.out.println("password2:"+MD5Utils.getMD5(passWord));
		System.out.println("password3:"+systemUser.getLoginPassword());
		Subject currentUser = SecurityUtils.getSubject();
		UsernamePasswordToken token = new UsernamePasswordToken(systemUser.getLoginName(), systemUser.getLoginPassword());
		token.setRememberMe(true);
		try{
			currentUser.login(token);
			SystemUser user = systemUserService.selectByLoginName(systemUser.getLoginName());
			systemUserService.updateLogByLoginName(user.getId(), ServletUtils.getIpAddr(), ServletUtils.getUserBrowser(), ServletUtils.getUserOperatingSystem());
		} catch (UnknownAccountException e) {
			return result(MessageConstants.BSSP_STATUS_USER_NOTEXIST);
		} catch (DisabledAccountException e) {
			return result(MessageConstants.BSSP_STATUS_USER_DISABLE);
		} catch (IncorrectCredentialsException e) {
			return result(MessageConstants.BSSP_STATUS_USER_PASSWORD);
		} catch (RuntimeException e) {
			return result(MessageConstants.BSSP_STATUS_UNKOWN);
		}
		return result(MessageConstants.BSSP_STATUS_SUCCESS);
	}
	
	/**
	 * 退出
	 * @return
	 */
	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public String logout() {
		Subject subject = SecurityUtils.getSubject();
		subject.logout();
		return redirectTo("/system");
	}
}
