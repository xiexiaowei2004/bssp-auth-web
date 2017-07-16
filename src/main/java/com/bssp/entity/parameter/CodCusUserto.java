package com.bssp.entity.parameter;

import java.io.Serializable;

public class CodCusUserto implements Serializable {
    private String useToCod;

    private String useToNam;

    public String getUseToCod() {
        return useToCod;
    }

    public void setUseToCod(String useToCod) {
        this.useToCod = useToCod == null ? null : useToCod.trim();
    }

    public String getUseToNam() {
        return useToNam;
    }

    public void setUseToNam(String useToNam) {
        this.useToNam = useToNam == null ? null : useToNam.trim();
    }
}