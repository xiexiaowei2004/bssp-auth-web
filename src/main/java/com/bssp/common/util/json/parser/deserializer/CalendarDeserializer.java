package com.bssp.common.util.json.parser.deserializer;

import java.lang.reflect.Type;
import java.util.Calendar;
import java.util.Date;

import com.bssp.common.util.json.parser.DefaultJSONParser;
import com.bssp.common.util.json.parser.JSONToken;


public class CalendarDeserializer implements ObjectDeserializer {
    public static final CalendarDeserializer instance = new CalendarDeserializer();

    @SuppressWarnings("unchecked")
    public <T> T deserialze(DefaultJSONParser parser, Type type, Object fieldName) {
        Date date = DateDeserializer.instance.deserialze(parser, type, fieldName);
        
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        
        return (T) calendar;
    }

    public int getFastMatchToken() {
        return JSONToken.LITERAL_INT;
    }

}
