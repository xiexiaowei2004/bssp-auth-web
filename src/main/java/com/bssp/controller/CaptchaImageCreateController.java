package com.bssp.controller;

import java.awt.image.BufferedImage;
import java.io.PrintWriter;

import javax.imageio.ImageIO;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.xml.ws.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.google.code.kaptcha.Constants;
import com.google.code.kaptcha.Producer;

/**
 *
 *
 * 项目名称：bssp Maven Webapp
 * 类名称：CaptchaImageCreateController
 * 类描述：验证码表示层
 * 创建人：simon.xie
 * 创建时间：2017年4月27日 下午10:12:17
 * 修改人：simon.xie
 * 修改时间：2017年4月27日 下午10:12:17
 * 修改备注：
 * @version
 *
 */
@Controller
public class CaptchaImageCreateController {

	@Autowired
	private Producer captchaProducer;

	@Autowired
	private Producer captchaProducerMain;

	/**
	 * 前台用户登录验证码
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/captcha-image")
	public ModelAndView getKaptchaImage(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// 禁止服务器端缓存
		response.setDateHeader("Expires", 0);

		// 设置标准的 HTTP/1.1 no-cache headers.
		response.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");

		// 设置IE扩展 HTTP/1.1 no-cache headers (use addHeader).
		response.addHeader("Cache-Control", "post-check=0, pre-check=0");

		// 设置标准 HTTP/1.0 不缓存图片
		response.setHeader("Pragma", "no-cache");

		// 返回一个 jpeg 图片，默认是text/html(输出文档的MIMI类型)
		response.setContentType("image/jpeg");

		// 为图片创建文本
		String capText = captchaProducer.createText();

		// 将文本保存在session中，这里就使用包中的静态变量吧
		request.getSession().setAttribute(Constants.KAPTCHA_SESSION_KEY, capText);

		// 创建带有文本的图片
		BufferedImage bi = captchaProducer.createImage(capText);
		ServletOutputStream out = response.getOutputStream();

		// 图片数据输出
		ImageIO.write(bi, "jpg", out);
		try {
			out.flush();
		} finally {
			out.close();
		}
		return null;
	}

	/**
	 * 后台管理员登录
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/captchaMain-image")
	public ModelAndView getKaptchaImageMain(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// 禁止服务器端缓存
		response.setDateHeader("Expires", 0);

		// 设置标准的 HTTP/1.1 no-cache headers.
		response.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");

		// 设置IE扩展 HTTP/1.1 no-cache headers (use addHeader).
		response.addHeader("Cache-Control", "post-check=0, pre-check=0");

		// 设置标准 HTTP/1.0 不缓存图片
		response.setHeader("Pragma", "no-cache");

		// 返回一个 jpeg 图片，默认是text/html(输出文档的MIMI类型)
		response.setContentType("image/jpeg");

		// 为图片创建文本
		String capText = captchaProducerMain.createText();

		HttpSession session  = request.getSession();

		String sessionKey = session.getId();

		// 将文本保存在session中，这里就使用包中的静态变量吧
//		session.setAttribute(Constants.KAPTCHA_SESSION_KEY+"_"+sessionKey, capText);
		System.out.println("验证码:"+capText);
		Cookie cookie = new Cookie(Constants.KAPTCHA_SESSION_KEY,capText);
		cookie.setMaxAge(180);//3分钟
		response.addCookie(cookie);


		// 创建带有文本的图片
		BufferedImage bi = captchaProducerMain.createImage(capText);
		ServletOutputStream out = response.getOutputStream();

		// 图片数据输出
		ImageIO.write(bi, "jpg", out);
		try {
			out.flush();
		} finally {
			out.close();
		}
		return null;
	}
}
