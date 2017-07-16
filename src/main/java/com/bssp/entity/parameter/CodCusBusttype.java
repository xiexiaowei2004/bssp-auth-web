package com.bssp.entity.parameter;

import java.io.Serializable;

public class CodCusBusttype implements Serializable {
    private String typeCo;

    private String typeNa;

    public String getTypeCo() {
        return typeCo;
    }

    public void setTypeCo(String typeCo) {
        this.typeCo = typeCo == null ? null : typeCo.trim();
    }

    public String getTypeNa() {
        return typeNa;
    }

    public void setTypeNa(String typeNa) {
        this.typeNa = typeNa == null ? null : typeNa.trim();
    }
}