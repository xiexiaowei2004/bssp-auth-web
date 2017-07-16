package com.bssp.service.impl.system;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.bssp.common.util.MD5Utils;
import com.bssp.common.util.SingletonLoginUtils;
import com.bssp.dao.system.SystemUserLoginLogMapper;
import com.bssp.dao.system.SystemUserMapper;
import com.bssp.dao.system.SystemUserRoleMapper;
import com.bssp.entity.system.QueryUser;
import com.bssp.entity.system.SystemUser;
import com.bssp.entity.system.SystemUserLoginLog;
import com.bssp.entity.system.SystemUserRole;
import com.bssp.service.impl.support.BaseServiceImpl;
import com.bssp.service.system.ISystemUserService;

/**
 * 
* 项目名称：bssp Maven Webapp
* 类名称：SystemUserServiceImpl   
* 类描述：SystemUser 表业务逻辑层接口实现类   
* 创建人：simon.xie
* 创建时间：2017年4月27日 下午10:12:17
* 修改人：simon.xie
* 修改时间：2017年4月27日 下午10:12:17
* @version
 */
@Service
public class SystemUserServiceImpl extends BaseServiceImpl<SystemUserMapper, SystemUser> implements ISystemUserService {

	@Autowired
	private SystemUserMapper systemUserMapper;
	@Autowired
	private SystemUserLoginLogMapper systemUserLoginLogMapper;
	@Autowired 
	private SystemUserRoleMapper systemUserRoleMapper;
	
	@Override
	public void insertSystemUser(SystemUser systemUser, String[] roleIds) {
		systemUser.setLoginPassword(MD5Utils.getMD5(systemUser.getLoginPassword()));
		systemUser.setCreateBy(SingletonLoginUtils.getSystemUserName());
		systemUser.setCreateTime(new Date());
		//this.insertSelective(systemUser);//插入用户
		this.insert(systemUser);
		
		if (roleIds != null && roleIds.length > 0) {
			List<SystemUserRole> systemUserRoles = new ArrayList<SystemUserRole>();
			for(int i = 0; i<roleIds.length; i++){
				SystemUserRole systemUserRole = new SystemUserRole();
				systemUserRole.setUserId(systemUser.getId());
				systemUserRole.setCreateTime(new Date());
				systemUserRole.setRoleId(Long.valueOf(roleIds[i]));
				systemUserRole.setCreateBy(SingletonLoginUtils.getSystemUserName());
				systemUserRoles.add(systemUserRole);
			}
			systemUserRoleMapper.insertUserRoles(systemUserRoles);//插入角色列表
		}
	}
	
	@Override
//	@Cacheable(value="userCache",key="'systemUser'+#loginName")
	public SystemUser selectByLoginName(String loginName) {
		SystemUser systemUser = new SystemUser();
		systemUser.setLoginName(loginName);
		return systemUserMapper.selectOne(systemUser);
	}
	
	@Override
	public Integer selectAllSystemUserNumber() {
		return systemUserMapper.selectCount(null);
	}
	
	@Override
	public List<SystemUser> selectAllSystemUser(QueryUser queryUser) {
		return systemUserMapper.selectAllSystemUser(queryUser);
	}
	
	@Override
	public List<SystemUser> selectSysUserByRoleId(Long roleId) {
		return systemUserMapper.selectSysUserByRoleId(roleId);
	}
	
	@Override
	public boolean checkLoginName(String loginName) {
		SystemUser systemUser = new SystemUser();
		systemUser.setLoginName(loginName);
		//int count = systemUserMapper.selectCount(systemUser);
		int count = systemUserMapper.selectCount(new EntityWrapper<SystemUser>(systemUser));
		if (count > 0) {
			return true;
		}
		return false;
	}

	@Override
	@Transactional
//	@CacheEvict(value="userCache",key="'sysUserLog'+#accountId")
	public void updateLogByLoginName(Long accountId, String ipAddr,
			String browser, String operatingSystem) {
		//更新systemUser表用户登录信息
		SystemUser systemUser = new SystemUser();
		systemUser.setId(accountId);
		systemUser.setLastLoginTime(new Date());
		systemUser.setLastLoginIp(ipAddr);
		//systemUserMapper.updateSelectiveById(systemUser);
		systemUserMapper.updateById(systemUser);
		//创建用户登录日志
		SystemUserLoginLog systemUserLoginLog = new SystemUserLoginLog();
		systemUserLoginLog.setUserId(accountId);
		systemUserLoginLog.setUserIp(ipAddr);
		systemUserLoginLog.setBrowser(browser);
		systemUserLoginLog.setOperatingSystem(operatingSystem);
		systemUserLoginLog.setLoginTime(new Date());
		systemUserLoginLogMapper.insert(systemUserLoginLog);
	}

	@Override
	public void updateUserStatus(Long accountId, Integer status) {
		SystemUser systemUser = new SystemUser();
		systemUser.setId(accountId);
		systemUser.setStatus(status);
		systemUser.setUpdateTime(new Date());
		systemUser.setUserName(SingletonLoginUtils.getSystemUserName());
		//systemUserMapper.updateSelectiveById(systemUser);
		systemUserMapper.updateById(systemUser);
	}
	
	@Override
	public void updateUserInfoBySystem(SystemUser systemUser, String[] roleIds) {
		systemUser.setUpdateTime(new Date());
		systemUser.setUpdateBy(SingletonLoginUtils.getSystemUserName());
		systemUserMapper.updateUserInfo(systemUser);//更新用户信息
		//删除SystemUserRole 表记录
		SystemUserRole userRole = new SystemUserRole();
		userRole.setUserId(systemUser.getId());
		//systemUserRoleMapper.deleteSelective(userRole);
		systemUserRoleMapper.deleteById(userRole);
		
		if (roleIds != null && roleIds.length > 0) {
			List<SystemUserRole> systemUserRoles = new ArrayList<SystemUserRole>();
			for(int i = 0; i<roleIds.length; i++){
				SystemUserRole systemUserRole = new SystemUserRole();
				systemUserRole.setUserId(systemUser.getId());
				systemUserRole.setCreateTime(new Date());
				systemUserRole.setRoleId(Long.valueOf(roleIds[i]));
				systemUserRole.setCreateBy(SingletonLoginUtils.getSystemUserName());
				systemUserRoles.add(systemUserRole);
			}
			systemUserRoleMapper.insertUserRoles(systemUserRoles);//插入角色列表
		}
	}
	
	@Override
	public void updateUserInfo(SystemUser systemUser) {
		systemUser.setUpdateTime(new Date());
		systemUser.setUpdateBy(SingletonLoginUtils.getSystemUserName());
		//systemUserMapper.updateSelectiveById(systemUser);//更新用户信息
		systemUserMapper.updateById(systemUser);
	}
	
	@Override
	public void updateUserPws(Long accountId, String loginPassword) {
		SystemUser systemUser = new SystemUser();
		systemUser.setId(accountId);
		systemUser.setLoginPassword(MD5Utils.getMD5(loginPassword));
		//systemUserMapper.updateSelectiveById(systemUser);
		systemUserMapper.updateById(systemUser);
	}

	@Override
	public void deleteSysUser(Long accountId) {
		//删除SystemUser 表信息
		systemUserMapper.deleteById(Long.valueOf(accountId));
		//删除SystemUserLoginLog 表用户记录
//		SystemUserLoginLog loginLog = new SystemUserLoginLog();
//		loginLog.setUserId(accountId);
//		systemUserLoginLogMapper.deleteSelective(loginLog);
//		systemUserLoginLogMapper.deleteById(loginLog);
		EntityWrapper entityWrapper = new EntityWrapper<SystemUserLoginLog>();
		entityWrapper.eq("USER_ID", accountId);
		systemUserLoginLogMapper.delete(entityWrapper);
		//删除 SystemUserRoleMapper 表用户角色记录
//		SystemUserRole userRole = new SystemUserRole();
//		userRole.setId(accountId);
		EntityWrapper entity = new EntityWrapper<SystemUserRole>();
		entity.eq("USER_ID", accountId);
		systemUserRoleMapper.delete(entity);
		//systemUserRoleMapper.deleteSelective(userRole);
	}

}