package com.bssp.entity.parameter;

import java.io.Serializable;

public class CodCusCurr implements Serializable {
    private String currCode;

    private String currSymb;

    private String currName;

    private String isMaintain;

    public String getCurrCode() {
        return currCode;
    }

    public void setCurrCode(String currCode) {
        this.currCode = currCode == null ? null : currCode.trim();
    }

    public String getCurrSymb() {
        return currSymb;
    }

    public void setCurrSymb(String currSymb) {
        this.currSymb = currSymb == null ? null : currSymb.trim();
    }

    public String getCurrName() {
        return currName;
    }

    public void setCurrName(String currName) {
        this.currName = currName == null ? null : currName.trim();
    }

    public String getIsMaintain() {
        return isMaintain;
    }

    public void setIsMaintain(String isMaintain) {
        this.isMaintain = isMaintain == null ? null : isMaintain.trim();
    }
}