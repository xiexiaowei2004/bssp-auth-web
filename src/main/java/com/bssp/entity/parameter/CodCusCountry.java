package com.bssp.entity.parameter;

import java.io.Serializable;

public class CodCusCountry implements Serializable {
    private String countryCo;

    private String countryEn;

    private String countryNa;

    private String examMark;

    private String highLow;

    public String getCountryCo() {
        return countryCo;
    }

    public void setCountryCo(String countryCo) {
        this.countryCo = countryCo == null ? null : countryCo.trim();
    }

    public String getCountryEn() {
        return countryEn;
    }

    public void setCountryEn(String countryEn) {
        this.countryEn = countryEn == null ? null : countryEn.trim();
    }

    public String getCountryNa() {
        return countryNa;
    }

    public void setCountryNa(String countryNa) {
        this.countryNa = countryNa == null ? null : countryNa.trim();
    }

    public String getExamMark() {
        return examMark;
    }

    public void setExamMark(String examMark) {
        this.examMark = examMark == null ? null : examMark.trim();
    }

    public String getHighLow() {
        return highLow;
    }

    public void setHighLow(String highLow) {
        this.highLow = highLow == null ? null : highLow.trim();
    }
}