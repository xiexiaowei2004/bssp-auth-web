package com.bssp.entity.parameter;

import java.io.Serializable;

public class CodCusLicensedocu implements Serializable {
    private String docuCode;

    private String docuName;

    public String getDocuCode() {
        return docuCode;
    }

    public void setDocuCode(String docuCode) {
        this.docuCode = docuCode == null ? null : docuCode.trim();
    }

    public String getDocuName() {
        return docuName;
    }

    public void setDocuName(String docuName) {
        this.docuName = docuName == null ? null : docuName.trim();
    }
}