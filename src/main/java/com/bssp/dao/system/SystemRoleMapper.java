package com.bssp.dao.system;

import java.util.List;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import com.bssp.entity.system.SystemRole;

/**
 * 
* 项目名称：bssp Maven Webapp
* 类名称：SystemRoleMapper   
* 类描述：SystemRole 表数据访问层接口   
* 创建人：simon.xie
* 创建时间：2017年4月27日 下午10:12:17
* 修改人：simon.xie
* 修改时间：2017年4月27日 下午10:12:17
* @version
 */
public interface SystemRoleMapper  extends BaseMapper<SystemRole> {
	
	/**
	 * 查找所有角色
	 * @return
	 */
	public List<SystemRole> selectAllRole();
	/**
	 * 通过角色ID删除角色权限关联
	 * @param roleId
	 */
	public void deleteRoleFunctionByRoleId(int roleId);

	/**
	 * 创建角色权限关联
	 * @param value
	 */
	public void createRoleFunction(String value);
	
	/**
	 * 获取角色对应的权限ID
	 * @param roleId
	 * @return
	 */
	public List<Long> queryRoleFunctionIdByRoleId(Long roleId);


}