package com.bssp.entity.parameter;

import java.io.Serializable;

public class CodCusCustomsfec implements Serializable {
    private String customsCode;

    private String customsName;

    public String getCustomsCode() {
        return customsCode;
    }

    public void setCustomsCode(String customsCode) {
        this.customsCode = customsCode == null ? null : customsCode.trim();
    }

    public String getCustomsName() {
        return customsName;
    }

    public void setCustomsName(String customsName) {
        this.customsName = customsName == null ? null : customsName.trim();
    }
}