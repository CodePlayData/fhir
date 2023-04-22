// @filename: Oid.test.ts

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
import { Oid } from "./Oid.js";

describe('Testes Unitários do Oid com...', () => {
    it('um oid válido', () => {
        const uri = new Oid("urn:oid:1.2.3.4.5");
        strictEqual(uri.protocol, 'urn:')
    });

    it('um uuid inválido', () => {
        throws(
            () => {
                new Oid("urn:uid")
            },
            Error,
            'This is an invalid oid. Remenber to begins with `urn:oid:`.'
        )
    });
});