package com.bssp.entity.parameter;

import java.io.Serializable;

public class CodCusWrap implements Serializable{
    private String wrapName;

    private String wrapType;

    private String licenseducoCode;

    public String getWrapName() {
        return wrapName;
    }

    public void setWrapName(String wrapName) {
        this.wrapName = wrapName == null ? null : wrapName.trim();
    }

    public String getWrapType() {
        return wrapType;
    }

    public void setWrapType(String wrapType) {
        this.wrapType = wrapType == null ? null : wrapType.trim();
    }

    public String getLicenseducoCode() {
        return licenseducoCode;
    }

    public void setLicenseducoCode(String licenseducoCode) {
        this.licenseducoCode = licenseducoCode == null ? null : licenseducoCode.trim();
    }
}