package com.bssp.entity.parameter;

import java.io.Serializable;

public class CodCusUnit implements Serializable {
    private String convCode;

    private String convRatio;

    private String unitCode;

    private String unitName;

    public String getConvCode() {
        return convCode;
    }

    public void setConvCode(String convCode) {
        this.convCode = convCode == null ? null : convCode.trim();
    }

    public String getConvRatio() {
        return convRatio;
    }

    public void setConvRatio(String convRatio) {
        this.convRatio = convRatio == null ? null : convRatio.trim();
    }

    public String getUnitCode() {
        return unitCode;
    }

    public void setUnitCode(String unitCode) {
        this.unitCode = unitCode == null ? null : unitCode.trim();
    }

    public String getUnitName() {
        return unitName;
    }

    public void setUnitName(String unitName) {
        this.unitName = unitName == null ? null : unitName.trim();
    }
}