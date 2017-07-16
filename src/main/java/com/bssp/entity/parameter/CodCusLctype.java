package com.bssp.entity.parameter;

import java.io.Serializable;

public class CodCusLctype implements Serializable {
    private String payWay;

    private String payName;

    public String getPayWay() {
        return payWay;
    }

    public void setPayWay(String payWay) {
        this.payWay = payWay == null ? null : payWay.trim();
    }

    public String getPayName() {
        return payName;
    }

    public void setPayName(String payName) {
        this.payName = payName == null ? null : payName.trim();
    }
}