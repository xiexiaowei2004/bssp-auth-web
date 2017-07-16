package com.bssp.entity.parameter;

import java.io.Serializable;

public class CodCusInvclass implements Serializable{
    private String invCode;

    private String invName;

    public String getInvCode() {
        return invCode;
    }

    public void setInvCode(String invCode) {
        this.invCode = invCode == null ? null : invCode.trim();
    }

    public String getInvName() {
        return invName;
    }

    public void setInvName(String invName) {
        this.invName = invName == null ? null : invName.trim();
    }
}