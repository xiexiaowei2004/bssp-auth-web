package com.bssp.entity.parameter;

import java.io.Serializable;

public class CodCusTrademode implements Serializable {
    private String tradeMode;

    private String districtT;

    private String basicIm;

    private String basicEx;

    private String imControl;

    private String exControl;

    private String pkSeq;

    public String getTradeMode() {
        return tradeMode;
    }

    public void setTradeMode(String tradeMode) {
        this.tradeMode = tradeMode == null ? null : tradeMode.trim();
    }

    public String getDistrictT() {
        return districtT;
    }

    public void setDistrictT(String districtT) {
        this.districtT = districtT == null ? null : districtT.trim();
    }

    public String getBasicIm() {
        return basicIm;
    }

    public void setBasicIm(String basicIm) {
        this.basicIm = basicIm == null ? null : basicIm.trim();
    }

    public String getBasicEx() {
        return basicEx;
    }

    public void setBasicEx(String basicEx) {
        this.basicEx = basicEx == null ? null : basicEx.trim();
    }

    public String getImControl() {
        return imControl;
    }

    public void setImControl(String imControl) {
        this.imControl = imControl == null ? null : imControl.trim();
    }

    public String getExControl() {
        return exControl;
    }

    public void setExControl(String exControl) {
        this.exControl = exControl == null ? null : exControl.trim();
    }

    public String getPkSeq() {
        return pkSeq;
    }

    public void setPkSeq(String pkSeq) {
        this.pkSeq = pkSeq == null ? null : pkSeq.trim();
    }
}