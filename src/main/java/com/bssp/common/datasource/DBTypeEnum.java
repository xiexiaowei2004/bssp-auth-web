package com.bssp.common.datasource;

public enum DBTypeEnum {
	one("dataSource1"), two("dataSource2");
	private String value;

	DBTypeEnum(String value) {
	    this.value = value;
	}

	public String getValue() {
	    return value;
	}
}
