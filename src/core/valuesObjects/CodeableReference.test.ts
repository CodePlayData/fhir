// @filename: CodeableReference.test.ts

/**
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
import { CodeableReference } from "./CodeableReference.js";
import { CodeableConcept } from "./CodeableConcept.js";
import { Coding } from "./Coding.js";
import { Code } from "../constructors/Code.js";
import { Reference } from "../entities/Reference.js";

test('Deve instanciar uma CodeableReference vazia.', () => {
    const ref = new CodeableReference();
    assert.strictEqual(ref.reference, undefined);
});

test('Deve instanciar uma CodeableReference completa.', () => {
    const ref = new CodeableReference(
        new CodeableConcept([
                new Coding(undefined, '0.0.1', new Code('Z012'))],
                'Testando 1, 2, 3,...'
            ),
            new Reference(undefined, 'Patient')
        )
    assert.strictEqual(ref.reference?.type, 'Patient');
});