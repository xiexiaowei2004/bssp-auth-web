package com.bssp.entity.parameter;

import java.io.Serializable;

public class CodCusTrade implements Serializable {
    private String tradeMode;

    private String abbrTrade;

    private String fullTrade;

    public String getTradeMode() {
        return tradeMode;
    }

    public void setTradeMode(String tradeMode) {
        this.tradeMode = tradeMode == null ? null : tradeMode.trim();
    }

    public String getAbbrTrade() {
        return abbrTrade;
    }

    public void setAbbrTrade(String abbrTrade) {
        this.abbrTrade = abbrTrade == null ? null : abbrTrade.trim();
    }

    public String getFullTrade() {
        return fullTrade;
    }

    public void setFullTrade(String fullTrade) {
        this.fullTrade = fullTrade == null ? null : fullTrade.trim();
    }
}