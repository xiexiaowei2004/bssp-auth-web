package com.bssp.entity.parameter;

import java.io.Serializable;

public class CodCusPaytype implements Serializable {
    private String payTypeCo;

    private String payTypeNa;

    public String getPayTypeCo() {
        return payTypeCo;
    }

    public void setPayTypeCo(String payTypeCo) {
        this.payTypeCo = payTypeCo == null ? null : payTypeCo.trim();
    }

    public String getPayTypeNa() {
        return payTypeNa;
    }

    public void setPayTypeNa(String payTypeNa) {
        this.payTypeNa = payTypeNa == null ? null : payTypeNa.trim();
    }
}