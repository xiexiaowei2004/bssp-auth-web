package com.bssp.entity.parameter;

import java.io.Serializable;
import java.math.BigDecimal;

public class CodCusPortlin implements Serializable{
    private String portCCod;

    private String portECod;

    private String portLine;

    private String portCount;

    private String portCode;

    private String quarantine;

    private BigDecimal pkSeq;

    public String getPortCCod() {
        return portCCod;
    }

    public void setPortCCod(String portCCod) {
        this.portCCod = portCCod == null ? null : portCCod.trim();
    }

    public String getPortECod() {
        return portECod;
    }

    public void setPortECod(String portECod) {
        this.portECod = portECod == null ? null : portECod.trim();
    }

    public String getPortLine() {
        return portLine;
    }

    public void setPortLine(String portLine) {
        this.portLine = portLine == null ? null : portLine.trim();
    }

    public String getPortCount() {
        return portCount;
    }

    public void setPortCount(String portCount) {
        this.portCount = portCount == null ? null : portCount.trim();
    }

    public String getPortCode() {
        return portCode;
    }

    public void setPortCode(String portCode) {
        this.portCode = portCode == null ? null : portCode.trim();
    }

    public String getQuarantine() {
        return quarantine;
    }

    public void setQuarantine(String quarantine) {
        this.quarantine = quarantine == null ? null : quarantine.trim();
    }

    public BigDecimal getPkSeq() {
        return pkSeq;
    }

    public void setPkSeq(BigDecimal pkSeq) {
        this.pkSeq = pkSeq;
    }
}