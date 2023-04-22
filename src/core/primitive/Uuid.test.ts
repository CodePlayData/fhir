// @filename: Uuid.test.ts

/*
 * Copyright 2023 Pedro Paulo Teixeira dos Santos

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

*/

import { describe, it } from "node:test";
import { strictEqual, throws } from "node:assert";
import { Uuid } from "./Uuid.js";

describe('Testes Unitários do Uuid com...', () => {
    it('um uuid válido', () => {
        const uri = new Uuid("urn:uuid:c5542ab6-3d96-403e-8e6b-b8bb52f48d9a?query=string");
        strictEqual(uri.protocol, 'urn:')
    });

    it('um uuid inválido.', () => {
        throws(
            () => {
                new Uuid("urn:uuuid")
            },
            Error,
            'This is an invalid uuid. Remenber to begins with `urn:uuid:`.'
        )
    });
});