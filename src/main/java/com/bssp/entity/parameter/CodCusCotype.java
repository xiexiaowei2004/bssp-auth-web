package com.bssp.entity.parameter;

import java.io.Serializable;

public class CodCusCotype implements Serializable {
    private String coOwner;

    private String coOwnersh;

    public String getCoOwner() {
        return coOwner;
    }

    public void setCoOwner(String coOwner) {
        this.coOwner = coOwner == null ? null : coOwner.trim();
    }

    public String getCoOwnersh() {
        return coOwnersh;
    }

    public void setCoOwnersh(String coOwnersh) {
        this.coOwnersh = coOwnersh == null ? null : coOwnersh.trim();
    }
}