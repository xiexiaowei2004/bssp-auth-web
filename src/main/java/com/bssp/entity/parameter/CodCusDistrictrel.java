package com.bssp.entity.parameter;

import java.io.Serializable;

public class CodCusDistrictrel implements Serializable {
    private String districtCode;

    private String districtName;

    private String districtType;

    public String getDistrictCode() {
        return districtCode;
    }

    public void setDistrictCode(String districtCode) {
        this.districtCode = districtCode == null ? null : districtCode.trim();
    }

    public String getDistrictName() {
        return districtName;
    }

    public void setDistrictName(String districtName) {
        this.districtName = districtName == null ? null : districtName.trim();
    }

    public String getDistrictType() {
        return districtType;
    }

    public void setDistrictType(String districtType) {
        this.districtType = districtType == null ? null : districtType.trim();
    }
}