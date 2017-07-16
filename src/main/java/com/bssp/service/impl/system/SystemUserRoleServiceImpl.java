package com.bssp.service.impl.system;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bssp.dao.system.SystemUserRoleMapper;
import com.bssp.entity.system.SystemUserRole;
import com.bssp.service.impl.support.BaseServiceImpl;
import com.bssp.service.system.ISystemUserRoleService;

/**
 * 
* 项目名称：bssp Maven Webapp
* 类名称：SystemUserRoleServiceImpl   
* 类描述：SystemUserRole 表业务逻辑层接口 实现类
 * 创建时间：2017年4月27日 下午10:12:17
 * 修改人：simon.xie
 * 修改时间：2017年4月27日 下午10:12:17
* @version
 */
@Service
public class SystemUserRoleServiceImpl extends BaseServiceImpl<SystemUserRoleMapper, SystemUserRole> implements ISystemUserRoleService {
	
	@Autowired
	private SystemUserRoleMapper systemUserRoleMapper;
	
	@Override
	public List<SystemUserRole> selectRoleListByAccountId(Long userId) {
		return systemUserRoleMapper.selectRoleListByAccountId(userId);
	}


}