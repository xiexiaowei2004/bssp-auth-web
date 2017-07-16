package com.bssp.common.util.json.parser.deserializer;

import java.awt.Font;
import java.lang.reflect.Type;

import com.bssp.common.util.json.JSONException;
import com.bssp.common.util.json.parser.DefaultJSONParser;
import com.bssp.common.util.json.parser.JSONLexer;
import com.bssp.common.util.json.parser.JSONToken;

public class FontDeserializer implements ObjectDeserializer {

    public final static FontDeserializer instance = new FontDeserializer();

    @SuppressWarnings("unchecked")
    public <T> T deserialze(DefaultJSONParser parser, Type type, Object fieldName) {
        JSONLexer lexer = parser.getLexer();
        
        if (lexer.token() == JSONToken.NULL) {
            lexer.nextToken(JSONToken.COMMA);
            return null;
        }

        if (lexer.token() != JSONToken.LBRACE && lexer.token() != JSONToken.COMMA) {
            throw new JSONException("syntax error");
        }
        lexer.nextToken();

        int size = 0, style = 0;
        String name = null;
        for (;;) {
            if (lexer.token() == JSONToken.RBRACE) {
                lexer.nextToken();
                break;
            }

            String key;
            if (lexer.token() == JSONToken.LITERAL_STRING) {
                key = lexer.stringVal();
                lexer.nextTokenWithColon(JSONToken.LITERAL_INT);
            } else {
                throw new JSONException("syntax error");
            }


            if (key.equalsIgnoreCase("name")) {
                if (lexer.token() == JSONToken.LITERAL_STRING) {
                    name = lexer.stringVal();
                    lexer.nextToken();
                } else {
                    throw new JSONException("syntax error");
                }
            } else if (key.equalsIgnoreCase("style")) {
                if (lexer.token() == JSONToken.LITERAL_INT) {
                    style = lexer.intValue();
                    lexer.nextToken();
                } else {
                    throw new JSONException("syntax error");
                }
            } else if (key.equalsIgnoreCase("size")) {
                if (lexer.token() == JSONToken.LITERAL_INT) {
                    size = lexer.intValue();
                    lexer.nextToken();
                } else {
                    throw new JSONException("syntax error");
                }
            } else {
                throw new JSONException("syntax error, " + key);
            }

            if (lexer.token() == JSONToken.COMMA) {
                lexer.nextToken(JSONToken.LITERAL_STRING);
            }
        }

        return (T) new Font(name, style, size);
    }

    public int getFastMatchToken() {
        return JSONToken.LBRACE;
    }
}
