package com.bssp.entity.parameter;

import java.io.Serializable;

public class CodCusInvestmode implements Serializable{
    private String investModeCode;

    private String investModeName;

    public String getInvestModeCode() {
        return investModeCode;
    }

    public void setInvestModeCode(String investModeCode) {
        this.investModeCode = investModeCode == null ? null : investModeCode.trim();
    }

    public String getInvestModeName() {
        return investModeName;
    }

    public void setInvestModeName(String investModeName) {
        this.investModeName = investModeName == null ? null : investModeName.trim();
    }
}