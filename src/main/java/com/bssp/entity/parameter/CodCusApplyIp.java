package com.bssp.entity.parameter;

import java.io.Serializable;
import java.util.Date;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
@TableName("cod_cus_apply_ip")
public class CodCusApplyIp implements Serializable {
	@TableField(exist = false)
	private static final long serialVersionUID = -3027379017513719120L;
	
	@TableId(value = "APPLY_ID")
	private String applyId;  //应用id
	
	@TableField(value = "APPLY_IP")
	private String applyIp;  //应用ip
	
	@TableField(value = "CREATE_TIME")
	private Date createTime;   //创建时间
	
	@TableField(value = "CREATE_BY")
    private String createBy;   //创建人
	
	@TableField(value = "UPDATE_TIME")
    private Date updateTime;   //修改时间
	
	@TableField(value = "UPDATE_BY")
    private String updateBy;   //修改人
	
	@TableField(value = "STATE")
    private Integer state;    //状态：1.正常；0.冻结
	
	@TableField(value = "REMARKS")
    private String remarks;  //备注信息

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

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public String getUpdateBy() {
        return updateBy;
    }

    public void setUpdateBy(String updateBy) {
        this.updateBy = updateBy == null ? null : updateBy.trim();
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks == null ? null : remarks.trim();
    }
}