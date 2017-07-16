package com.bssp.common.util.json.parser.deserializer;

import java.lang.reflect.Type;

import com.bssp.common.util.json.parser.DefaultJSONParser;

public interface ObjectDeserializer {
    <T> T deserialze(DefaultJSONParser parser, Type type, Object fieldName);
    
    int getFastMatchToken();
}
