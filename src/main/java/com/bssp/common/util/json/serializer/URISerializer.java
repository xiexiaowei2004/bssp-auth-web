/*
 * Copyright 1999-2101 kingdee Group.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.bssp.common.util.json.serializer;

import java.io.IOException;
import java.lang.reflect.Type;
import java.net.URI;

/**
 * @author wenshao<szujobs@hotmail.com>
 */
public class URISerializer implements ObjectSerializer {

    public final static URISerializer instance = new URISerializer();

    public void write(JSONSerializer serializer, Object object, Object fieldName, Type fieldType) throws IOException {
        if (object == null) {
            serializer.writeNull();
            return;
        }

        URI uri = (URI) object;
        serializer.write(uri.toString());
    }

}