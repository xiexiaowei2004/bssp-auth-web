package com.bssp.entity.parameter;

import java.io.Serializable;

public class CodCusLevytype implements Serializable {
    private String cutMode;

    private String abbrCut;

    private String fullCut;

    public String getCutMode() {
        return cutMode;
    }

    public void setCutMode(String cutMode) {
        this.cutMode = cutMode == null ? null : cutMode.trim();
    }

    public String getAbbrCut() {
        return abbrCut;
    }

    public void setAbbrCut(String abbrCut) {
        this.abbrCut = abbrCut == null ? null : abbrCut.trim();
    }

    public String getFullCut() {
        return fullCut;
    }

    public void setFullCut(String fullCut) {
        this.fullCut = fullCut == null ? null : fullCut.trim();
    }
}