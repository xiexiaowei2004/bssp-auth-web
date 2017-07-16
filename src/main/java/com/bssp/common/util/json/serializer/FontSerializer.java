package com.bssp.common.util.json.serializer;

import java.awt.Font;
import java.io.IOException;
import java.lang.reflect.Type;

import com.bssp.common.util.json.JSON;

public class FontSerializer implements ObjectSerializer {

    public final static FontSerializer instance = new FontSerializer();

    public void write(JSONSerializer serializer, Object object, Object fieldName, Type fieldType) throws IOException {
        SerializeWriter out = serializer.getWriter();
        Font font = (Font) object;
        if (font == null) {
            out.writeNull();
            return;
        }
        
        char sep = '{';
        if (out.isEnabled(SerializerFeature.WriteClassName)) {
            out.write('{');
            out.writeFieldName(JSON.DEFAULT_TYPE_KEY);
            out.writeString(Font.class.getName());
            sep = ',';
        }
        
        out.writeFieldValue(sep, "name", font.getName());
        out.writeFieldValue(',', "style", font.getStyle());
        out.writeFieldValue(',', "size", font.getSize());
        out.write('}');

    }

}
