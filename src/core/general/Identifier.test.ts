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

import { describe, it } from "node:test";
import assert from "node:assert";
import { Identifier } from "./Identifier.js";
import { Coding } from "./Coding.js";
import { Code } from "../primitives/Code.js";
import { CodeableConcept } from "./CodeableConcept.js";


describe('Testes de unidade da classe Identifier.', () => {

    it('Deve instanciar um Identifier vazio.', () => {
        const id = new Identifier();
        assert.strictEqual(id.use, undefined);
    });
    
    it('Deve instanciar um Identifier com o codigo de uso.', () => {
        const id = new Identifier('usual');
        assert.strictEqual(JSON.stringify(id.use), '"usual"');
    });
    
    it('Deve instanciar um Identifier com o tipo.', () => {
        const id = new Identifier(
            undefined,
            {
                system: 'http://hl7.org/fhir/ValueSet/identifier-type',
                version: '5.0.0',
                code: 'UDI',
                display: 'Accession ID',
                userSelected: true
            }
        )
        assert.strictEqual(
            JSON.stringify(id), 
            '{"type":{"coding":[{"system":"http://hl7.org/fhir/ValueSet/identifier-type","version":"5.0.0","code":"UDI","display":"Accession ID","userSelected":true}]}}'
        );
    });
    
    it('Deve instanciar um Identifier igual a um modelo pre-definido que contem system e value.', () => {
        type customValueSet = {
            version: '0.1.0',
            compose: {
                include: [
                    {
                        system: 'urn:system',
                        concept: 
                            { code: 'slot-0001', display: 'Slot-1' }
                    }
                ]
            }
        }
        const id = new Identifier<any, customValueSet>(undefined, undefined, 'urn:system', 'slot-0001');
        assert.deepEqual(
            JSON.stringify(id),
            '{"value":"slot-0001","system":"urn:system"}'
        )
    });
});