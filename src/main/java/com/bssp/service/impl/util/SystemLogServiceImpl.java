package com.bssp.service.impl.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bssp.dao.util.SystemLogMapper;
import com.bssp.entity.util.SystemLog;
import com.bssp.service.impl.support.BaseServiceImpl;
import com.bssp.service.util.ISystemLogService;
/**
 * 
 * @ClassName SystemLogServiceImpl
 * @Description 用户行为日志
 * @author Simon.xie
 * @Date 2017年5月3日 下午9:47:54
 * @version 1.0.0
 */
@Service
public class SystemLogServiceImpl extends BaseServiceImpl<SystemLogMapper, SystemLog> implements ISystemLogService {
    @Autowired
    public SystemLogMapper systemLogMapper;
}
