package com.bssp.entity.system;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import com.baomidou.mybatisplus.enums.IdType;

/**
 * 
* 项目名称：bssp Maven Webapp
* 类名称：SystemMenu   
* 类描述：SystemMenu 表实体类   
* 创建人：simon.xie
* 创建时间：2016年11月13日 下午10:41:00     
* @version
 */
@TableName("system_menu")
public class SystemMenu implements Serializable {


	@TableField(exist = false)
	private static final long serialVersionUID = 1L;

	/** 权限编号 */
	@TableId(value = "ID", type = IdType.AUTO)
	private Long id;

	/** 父级编号 */
	@TableField(value = "PARENT_ID")
	private Long parentId;

	/** 权限类型：1.菜单；2.功能；0.操作 */
	@TableField(value = "MENU_TYPE")
	private Integer menuType;

	/** 权限代码 */
	@TableField(value = "MENU_CODE")
	private String menuCode;

	/** 权限名称 */
	@TableField(value = "MENU_NAME")
	private String menuName;

	/** 权限排序 */
	private Integer sort;

	/** 链接地址 */
	private String href;

	/** 图标名称 */
	private String icon;

	/** 状态：1.正常；0.冻结 */
	private Integer status;

	/** 权限标识 */
	private String permission;

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

	/** 备注信息 */
	private String remarks;
	
	
	/**子级权限List*/
	@TableField(exist = false)
	private List<SystemMenu> childMenuList;
	/**是否选中*/
	@TableField(exist = false)
	private boolean checked;
	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getParentId() {
		return this.parentId;
	}

	public void setParentId(Long parentId) {
		this.parentId = parentId;
	}

	public Integer getMenuType() {
		return this.menuType;
	}

	public void setMenuType(Integer menuType) {
		this.menuType = menuType;
	}

	public String getMenuCode() {
		return this.menuCode;
	}

	public void setMenuCode(String menuCode) {
		this.menuCode = menuCode;
	}

	public String getMenuName() {
		return this.menuName;
	}

	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}

	public Integer getSort() {
		return this.sort;
	}

	public void setSort(Integer sort) {
		this.sort = sort;
	}

	public String getHref() {
		return this.href;
	}

	public void setHref(String href) {
		this.href = href;
	}

	public String getIcon() {
		return this.icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}

	public Integer getStatus() {
		return this.status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public String getPermission() {
		return this.permission;
	}

	public void setPermission(String permission) {
		this.permission = permission;
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

	public String getRemarks() {
		return this.remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public List<SystemMenu> getChildMenuList() {
		return childMenuList;
	}

	public void setChildMenuList(List<SystemMenu> childMenuList) {
		this.childMenuList = childMenuList;
	}

	public boolean isChecked() {
		return checked;
	}

	public void setChecked(boolean checked) {
		this.checked = checked;
	}

}
