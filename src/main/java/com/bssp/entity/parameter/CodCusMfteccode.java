package com.bssp.entity.parameter;

import java.io.Serializable;

public class CodCusMfteccode implements Serializable{
    private String mftecCode;

    private String mftecName;

    public String getMftecCode() {
        return mftecCode;
    }

    public void setMftecCode(String mftecCode) {
        this.mftecCode = mftecCode == null ? null : mftecCode.trim();
    }

    public String getMftecName() {
        return mftecName;
    }

    public void setMftecName(String mftecName) {
        this.mftecName = mftecName == null ? null : mftecName.trim();
    }
}