package com.bssp.entity.parameter;

import java.io.Serializable;

public class CodCusTrans implements Serializable {
    private String transMode;

    private String transSpec;

    public String getTransMode() {
        return transMode;
    }

    public void setTransMode(String transMode) {
        this.transMode = transMode == null ? null : transMode.trim();
    }

    public String getTransSpec() {
        return transSpec;
    }

    public void setTransSpec(String transSpec) {
        this.transSpec = transSpec == null ? null : transSpec.trim();
    }
}