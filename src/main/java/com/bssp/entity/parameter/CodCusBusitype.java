package com.bssp.entity.parameter;

import java.io.Serializable;

public class CodCusBusitype implements Serializable {
    private String busiCode;

    private String busiName;

    public String getBusiCode() {
        return busiCode;
    }

    public void setBusiCode(String busiCode) {
        this.busiCode = busiCode == null ? null : busiCode.trim();
    }

    public String getBusiName() {
        return busiName;
    }

    public void setBusiName(String busiName) {
        this.busiName = busiName == null ? null : busiName.trim();
    }
}