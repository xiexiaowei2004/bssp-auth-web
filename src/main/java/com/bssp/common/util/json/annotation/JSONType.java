package com.bssp.common.util.json.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import com.bssp.common.util.json.serializer.SerializerFeature;

/**
*  @author simon.xie
* @date 2017-4-29 下午1:25:40
*/
@Retention(RetentionPolicy.RUNTIME)
@Target({ ElementType.TYPE })
public @interface JSONType {

    boolean asm() default true;

    String[] orders() default {};
    
    String[] ignores() default {};

    SerializerFeature[] serialzeFeatures() default {};
    
    boolean alphabetic() default true;
    
    Class<?> mappingTo() default Void.class;
}
