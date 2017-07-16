package com.bssp.entity.parameter;

import java.io.Serializable;

public class CodCusPaymode implements Serializable {
    private String payModeCode;

    private String payModeName;

    public String getPayModeCode() {
        return payModeCode;
    }

    public void setPayModeCode(String payModeCode) {
        this.payModeCode = payModeCode == null ? null : payModeCode.trim();
    }

    public String getPayModeName() {
        return payModeName;
    }

    public void setPayModeName(String payModeName) {
        this.payModeName = payModeName == null ? null : payModeName.trim();
    }
}