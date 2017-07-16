package com.bssp.entity.parameter;

import java.io.Serializable;

public class CodCusTransf implements Serializable {
    private String trafCode;

    private String trafSpec;

    public String getTrafCode() {
        return trafCode;
    }

    public void setTrafCode(String trafCode) {
        this.trafCode = trafCode == null ? null : trafCode.trim();
    }

    public String getTrafSpec() {
        return trafSpec;
    }

    public void setTrafSpec(String trafSpec) {
        this.trafSpec = trafSpec == null ? null : trafSpec.trim();
    }
}