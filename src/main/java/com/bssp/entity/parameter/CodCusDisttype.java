package com.bssp.entity.parameter;

import java.io.Serializable;

public class CodCusDisttype implements Serializable {
    private String districtT;

    private String distType;

    public String getDistrictT() {
        return districtT;
    }

    public void setDistrictT(String districtT) {
        this.districtT = districtT == null ? null : districtT.trim();
    }

    public String getDistType() {
        return distType;
    }

    public void setDistType(String distType) {
        this.distType = distType == null ? null : distType.trim();
    }
}