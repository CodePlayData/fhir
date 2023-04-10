// @filename: Idenfier.test.ts

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

import test from "node:test";
import assert from "node:assert";
import { Identifier } from "./Identifier.js";
import { Code } from "../generics/Code.js";
import { CodeableConcept } from "../generics/CodeableConcept.js";
import { Coding } from "./Coding.js";

test('Deve instanciar um Identifier vazio.', () => {
    const id = new Identifier();
    assert.strictEqual(id.use, undefined);
});

test('Deve instanciar um Identifier com o codigo de uso.', () => {
    const id = new Identifier(new Code('usual'));
    assert.strictEqual(JSON.stringify(id.use), '"usual"');
});

test('Deve instanciar um Identifier com o tipo.', () => {
    const id = new Identifier(
        undefined,
        new CodeableConcept(
            [
                new Coding(
                    undefined,
                    undefined,
                    new Code('DL')
                )
            ]
        )
    )
    assert.strictEqual(JSON.stringify(id), '{"type":{"coding":[{"code":"DL"}]}}');
});

test('Deve instanciar um Identifier igual a um modelo pre-definido que contem system e value.', () => {
    const id = new Identifier(undefined, undefined, 'urn:system', 'slot-0001');
    assert.deepEqual(
        JSON.stringify(id),
        JSON.stringify({
            "system": "urn:system",
            "value": "slot-0001"
        })
    )
});