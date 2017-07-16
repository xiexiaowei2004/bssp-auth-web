package com.bssp.entity.parameter;

import java.io.Serializable;

public class CodCusLevymode implements Serializable {
    private String dutyMode;

    private String dutySpec;

    public String getDutyMode() {
        return dutyMode;
    }

    public void setDutyMode(String dutyMode) {
        this.dutyMode = dutyMode == null ? null : dutyMode.trim();
    }

    public String getDutySpec() {
        return dutySpec;
    }

    public void setDutySpec(String dutySpec) {
        this.dutySpec = dutySpec == null ? null : dutySpec.trim();
    }
}