package com.bssp.entity.system;

import java.io.Serializable;
import java.util.Date;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import com.baomidou.mybatisplus.enums.IdType;

/**
 * 
* 项目名称：bssp Maven Webapp
* 类名称：SystemUser   
* 类描述： SystemUser 表实体类  
* 创建人：simon.xie
* 创建时间：2016年11月12日 下午10:19:48
* @version
 */
@TableName("system_user")
public class SystemUser implements Serializable {

	@TableField(exist = false)
	private static final long serialVersionUID = 1L;

	/** 用户ID */
	@TableId(value = "ID", type = IdType.AUTO)
	private Long id;

	/** 登录名 */
	@TableField(value = "LOGIN_NAME")
	private String loginName;

	/** 用户密码 */
	@TableField(value = "LOGIN_PASSWORD")
	private String loginPassword;

	/** 昵称 */
	@TableField(value = "USER_NAME")
	private String userName;

	/** 真实姓名 */
	@TableField(value = "REAL_NAME")
	private String realName;

	/** 性别：0.保密；1.男； 2.女 */
	@TableField(value = "SEX")
	private Integer sex;

	/** 年龄 */
	@TableField(value = "AGE")
	private Integer age;

	/** 用户头像 */
	@TableField(value = "PIC_IMG")
	private String picImg;

	/** 状态：0.冻结；1.正常；2.删除 */
	@TableField(value = "STATUS")
	private Integer status;

	/** 最后登录时间 */
	@TableField(value = "LAST_LOGIN_TIME")
	private Date lastLoginTime;

	/** 最后登录IP */
	@TableField(value = "LAST_LOGIN_IP")
	private String lastLoginIp;

	/** 电子邮箱 */
	@TableField(value = "EMAIL")
	private String email;

	/** 手机号码 */
	@TableField(value = "TELEPHONE")
	private String telephone;

	/** 创建时间 */
	@TableField(value = "CREATE_TIME")
	private Date createTime;

	/** 创建者 */
	@TableField(value = "CREATE_BY")
	private String createBy;

	/** 更新时间 */
	@TableField(value = "UPDATE_TIME")
	private Date updateTime;

	/** 更新者 */
	@TableField(value = "UPDATE_BY")
	private String updateBy;


	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getLoginName() {
		return this.loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	public String getLoginPassword() {
		return this.loginPassword;
	}

	public void setLoginPassword(String loginPassword) {
		this.loginPassword = loginPassword;
	}

	public String getUserName() {
		return this.userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getRealName() {
		return this.realName;
	}

	public void setRealName(String realName) {
		this.realName = realName;
	}

	public Integer getSex() {
		return this.sex;
	}

	public void setSex(Integer sex) {
		this.sex = sex;
	}

	public Integer getAge() {
		return this.age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getPicImg() {
		return this.picImg;
	}

	public void setPicImg(String picImg) {
		this.picImg = picImg;
	}

	public Integer getStatus() {
		return this.status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Date getLastLoginTime() {
		return this.lastLoginTime;
	}

	public void setLastLoginTime(Date lastLoginTime) {
		this.lastLoginTime = lastLoginTime;
	}

	public String getLastLoginIp() {
		return this.lastLoginIp;
	}

	public void setLastLoginIp(String lastLoginIp) {
		this.lastLoginIp = lastLoginIp;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelephone() {
		return this.telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public Date getCreateTime() {
		return this.createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public String getCreateBy() {
		return this.createBy;
	}

	public void setCreateBy(String createBy) {
		this.createBy = createBy;
	}

	public Date getUpdateTime() {
		return this.updateTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

	public String getUpdateBy() {
		return this.updateBy;
	}

	public void setUpdateBy(String updateBy) {
		this.updateBy = updateBy;
	}

}
