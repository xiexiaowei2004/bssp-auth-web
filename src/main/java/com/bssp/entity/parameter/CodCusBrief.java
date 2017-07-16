package com.bssp.entity.parameter;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import com.baomidou.mybatisplus.enums.IdType;

import java.io.Serializable;

@TableName("cod_cus_brief")
public class CodCusBrief implements Serializable {

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;

    /** 企业海关代码 */
    @TableId(value = "REG_CO_CGAC")
    private String regCoCgac;

    @TableField(value = "ENT_NAME")
    private String entName;

    @TableField(value = "CHK_ANNUAL")
    private String chkAnnual;

    @TableField(exist = false)
    private int pageSize;   //页面大小

    @TableField(exist = false)
    private int pageNumber;   //起始行数

    @TableField(exist = false)
    private String sort;   //排序名

    @TableField(exist = false)
    private String sortOrder;   //排序顺序

    public String getRegCoCgac() {
        return regCoCgac;
    }

    public void setRegCoCgac(String regCoCgac) {
        this.regCoCgac = regCoCgac == null ? null : regCoCgac.trim();
    }

    public String getEntName() {
        return entName;
    }

    public void setEntName(String entName) {
        this.entName = entName == null ? null : entName.trim();
    }

    public String getChkAnnual() {
        return chkAnnual;
    }

    public void setChkAnnual(String chkAnnual) {
        this.chkAnnual = chkAnnual == null ? null : chkAnnual.trim();
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public int getPageNumber() {
        return pageNumber;
    }

    public void setPageNumber(int pageNumber) {
        this.pageNumber = pageNumber;
    }

    public String getSort() {
        return sort;
    }

    public void setSort(String sort) {
        this.sort = sort;
    }

    public String getSortOrder() {
        return sortOrder;
    }

    public void setSortOrder(String sortOrder) {
        this.sortOrder = sortOrder;
    }
}