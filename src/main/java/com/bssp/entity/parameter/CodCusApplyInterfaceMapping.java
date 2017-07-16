package com.bssp.entity.parameter;

import java.io.Serializable;
import java.util.Date;

import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
@TableName("cod_cus_apply_interface_mapping")
public class CodCusApplyInterfaceMapping implements Serializable {
	
	@TableField(exist = false)
	private static final long serialVersionUID = -7447568598796004241L;
	
	@TableId(value = "APPLY_ID")
	private String applyId;  //应用id
	
	@TableField(value = "INTERFACE_INFO")
    private Object interfaceInfo; //接口信息:接口id，接口名称，接口url
	
	@TableField(value = "CREATE_TIME")
    private Date createTime;   //创建时间
	
	@TableField(value = "CREATE_BY")
    private String createBy;   //创建人
	
	@TableField(value = "REMARKS")
    private String remarks;  //备注信息

    public String getApplyId() {
        return applyId;
    }

    public void setApplyId(String applyId) {
        this.applyId = applyId == null ? null : applyId.trim();
    }

    public Object getInterfaceInfo() {
        return interfaceInfo;
    }

    public void setInterfaceInfo(Object interfaceInfo) {
        this.interfaceInfo = interfaceInfo;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getCreateBy() {
        return createBy;
    }

    public void setCreateBy(String createBy) {
        this.createBy = createBy == null ? null : createBy.trim();
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks == null ? null : remarks.trim();
    }
}