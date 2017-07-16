package com.bssp.entity.parameter;

import java.io.Serializable;

public class CodCusClassify implements Serializable {
    private Double pkSeq;

    private String gName;

    private String keyName;

    private String classSpec;

    private String codeT;

    private String codeS;

    private String classNo;

    public Double getPkSeq() {
        return pkSeq;
    }

    public void setPkSeq(Double pkSeq) {
        this.pkSeq = pkSeq;
    }

    public String getgName() {
        return gName;
    }

    public void setgName(String gName) {
        this.gName = gName == null ? null : gName.trim();
    }

    public String getKeyName() {
        return keyName;
    }

    public void setKeyName(String keyName) {
        this.keyName = keyName == null ? null : keyName.trim();
    }

    public String getClassSpec() {
        return classSpec;
    }

    public void setClassSpec(String classSpec) {
        this.classSpec = classSpec == null ? null : classSpec.trim();
    }

    public String getCodeT() {
        return codeT;
    }

    public void setCodeT(String codeT) {
        this.codeT = codeT == null ? null : codeT.trim();
    }

    public String getCodeS() {
        return codeS;
    }

    public void setCodeS(String codeS) {
        this.codeS = codeS == null ? null : codeS.trim();
    }

    public String getClassNo() {
        return classNo;
    }

    public void setClassNo(String classNo) {
        this.classNo = classNo == null ? null : classNo.trim();
    }
}